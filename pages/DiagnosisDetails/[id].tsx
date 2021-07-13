/**
 *
 */

import React, { FC, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import { useRouter } from 'next/router';
import Title from '../../components/Titles/Title';
import SubTitle from '../../components/Titles/SubTitle';
import Auth from '../../utils/auth';
import axios, { AxiosResponse } from 'axios';
import Loading from '../../components/Loading';
import { IAnalysis } from '../../utils/interfaces';

/* ENV VARIABLES */
const GET_ANALYSIS_URL = process.env.GET_ANALYSIS_URL;

const DiagnosisDetails: FC = (): JSX.Element => {
  /* Initializations */
  const router = useRouter();

  /* Local State */
  const [analysis, setAnalysis] = useState<IAnalysis>();
  const [isLoading, setIsLoading] = useState(true);

  /* Component Update */
  useEffect(() => {
    if (router.query.id) {
      getAnalysis();
    }
  }, [router.query.id]);

  /* Functions */
  const getAnalysis = async () => {
    setIsLoading(true);
    const token = localStorage.getItem('Token');
    console.log(GET_ANALYSIS_URL);
    try {
      const response: AxiosResponse = await axios.post(
        `${GET_ANALYSIS_URL}`,
        {
          analysisId: router.query.id,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setIsLoading(false);
      setAnalysis(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(analysis);

  return (
    <Auth>
      {isLoading ? (
        <div className={isLoading ? 'visible' : 'invisible'}>
          <Loading />
        </div>
      ) : (
        <div className={'w-full h-full'}>
          <Menu />
          <div
            className={
              'mb-6 w-full flex items-center justify-center flex-col mt-20'
            }
          >
            <img src={'https://i.imgur.com/0fwtpyU.png'} alt={'Notepad Icon'} />
            <Title title={'Pre-Diagnosis Details'} marginTop={'0'} />
            <span className={'mt-2'}>{analysis?.date.split('T')[0]}</span>
          </div>
          {/* Analysis Results */}
          <div
            className={
              'mb-6 w-full flex items-center justify-center flex-col mt-10'
            }
          >
            <img
              width={30}
              height={30}
              src={'https://i.imgur.com/dSV6Bec.png'}
              alt={'Notepad Icon'}
            />
            <SubTitle
              title={'Analysis Results:'}
              fontSize={'text-xl'}
              marginTop={'0'}
            />
            <div
              className={
                'w-primaryInput pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary'
              }
            >
              <span className={'text-secondary'}>{analysis?.finalResults}</span>
            </div>
          </div>
          {/* Your Symptoms */}
          <div
            className={
              'mb-6 w-full flex items-center justify-center flex-col mt-10'
            }
          >
            <img
              width={30}
              height={30}
              src={'https://i.imgur.com/2RVKhVJ.png'}
              alt={'Notepad Icon'}
            />
            <SubTitle
              title={'Your Symptoms:'}
              fontSize={'text-xl'}
              marginTop={'0'}
            />
            <div
              className={
                'max-w-prediagDeta flex items-center jusitfy-center flex-wrap'
              }
            >
              {analysis?.analysis[0].symptomsResults.userSymptoms.map(
                (symptom, index) => (
                  <div
                    id={`${symptom}${index}`}
                    className={
                      'pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary m-2'
                    }
                  >
                    <span className={'text-secondary'}>{symptom}</span>
                  </div>
                )
              )}
            </div>
          </div>
          {/* Disease Symptoms */}
          {analysis?.analysis.map((element, index) => (
            <>
              <div
                id={`${element.diseaseName} + ${index}`}
                className={
                  'mb-6 w-full flex items-center justify-center flex-col mt-10'
                }
              >
                <img
                  width={30}
                  height={30}
                  src={'https://i.imgur.com/neDIOHW.png'}
                  alt={'Notepad Icon'}
                />
                <SubTitle
                  title={`${element.diseaseName} Symptoms:`}
                  fontSize={'text-xl'}
                  marginTop={'0'}
                />
                <div
                  className={
                    'w-primaryInput pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary'
                  }
                >
                  <ul>
                    {element.symptomsResults.diseaseSymptoms.map(
                      (symptom, index) => (
                        <li
                          id={`${symptom} + ${index}`}
                          className={'mb-2 mt-2'}
                        >
                          <div className={'flex items-center justify-between'}>
                            <span className={'text-secondary capitalize'}>
                              {symptom}
                            </span>
                            {element.symptomsResults.symptomsMatch.map(
                              (symptomMatch, index) => {
                                if (symptomMatch === symptom) {
                                  return (
                                    <img
                                      id={`${symptomMatch} + ${index}`}
                                      className={'ml-4'}
                                      width={30}
                                      height={30}
                                      src={'https://i.imgur.com/0xEUuBg.png'}
                                      alt={'Notepad Icon'}
                                    />
                                  );
                                }
                              }
                            )}
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
              {/* Pathologies Q/A */}
              <div
                className={
                  'mb-6 w-full flex items-center justify-start flex-col mt-10'
                }
              >
                <img
                  width={30}
                  height={30}
                  src={'https://i.imgur.com/lqK8i6E.png'}
                  alt={'Notepad Icon'}
                />
                <SubTitle
                  title={`${element.diseaseName} Pathologies Q/A`}
                  fontSize={'text-xl'}
                  marginTop={'0'}
                />
                <div className={'max-w-prediagDeta w-full'}>
                  {element.pathologies.map((pathology, index) => (
                    <div
                      id={`${pathology} + ${index}`}
                      className={'flex items-center justify-start mt-2 mb-2'}
                    >
                      <span className={'max-w-list'}>
                        {pathology.pathologyName}
                      </span>
                      {pathology.pathologyValidation ? (
                        <img
                          width={30}
                          height={30}
                          src={'https://i.imgur.com/0xEUuBg.png'}
                          alt={'Notepad Icon'}
                        />
                      ) : (
                        <img
                          width={30}
                          height={30}
                          src={'https://i.imgur.com/KLYvku5.png'}
                          alt={'Notepad Icon'}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
          {/* Professionals Recommendations */}
          <div
            className={
              'mb-6 w-full flex items-center justify-start flex-col mt-10'
            }
          >
            <img
              width={40}
              height={40}
              src={'https://i.imgur.com/MpLul9z.png'}
              alt={'Notepad Icon'}
            />
            <SubTitle
              title={'CareYou recommendations:'}
              fontSize={'text-xl'}
              marginTop={'0'}
            />
            <div className={'max-w-prediagDeta'}>
              <ul
                className={
                  'w-full max-w-prediagDeta flex items-center justify-start overflow-x-auto'
                }
              >
                <li
                  className={
                    'w-professionalRecommendation min-w-professionalRecommendation ml-4 mr-4 pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary'
                  }
                >
                  <div className={'flex items-center justify-start'}>
                    <img
                      width={30}
                      height={30}
                      src={'https://i.imgur.com/EFGVCkB.png'}
                    />
                    <span className={'text-secondary ml-2'}>
                      Darcy Bartolome
                    </span>
                  </div>
                  <div
                    className={
                      'flex items-center text-center justify-center flex-col'
                    }
                  >
                    <span className={'text-secondary text-sm'}>
                      I'm glad to have the opportunity to be your doctor, with
                      my 6+ years of medical experiences, I'll can help you...
                    </span>
                  </div>
                  <div className={'flex items-center justify-start'}>
                    <img
                      width={30}
                      height={30}
                      src={'https://i.imgur.com/4Ow0WDX.png'}
                    />
                    <span className={'text-secondary ml-2'}>Pneumology</span>
                  </div>
                  <div
                    className={
                      'w-full flex items-center justify-center pt-4 pb-2'
                    }
                  >
                    <button
                      onClick={() => router.push('/Home')}
                      type={'button'}
                      className={
                        'w-auto justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-primary hover:text-primaryButtonHover focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:text-sm'
                      }
                    >
                      Requ. Appointment
                    </button>
                  </div>
                </li>

                <li
                  className={
                    'w-professionalRecommendation min-w-professionalRecommendation pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary'
                  }
                >
                  <div className={'flex items-center justify-start'}>
                    <img
                      width={30}
                      height={30}
                      src={'https://i.imgur.com/EFGVCkB.png'}
                    />
                    <span className={'text-secondary ml-2'}>
                      Darcy Bartolome
                    </span>
                  </div>
                  <div
                    className={
                      'flex items-center text-center justify-center flex-col'
                    }
                  >
                    <span className={'text-secondary text-sm'}>
                      I'm glad to have the opportunity to be your doctor, with
                      my 6+ years of medical experiences, I'll can help you...
                    </span>
                  </div>
                  <div className={'flex items-center justify-start'}>
                    <img
                      width={30}
                      height={30}
                      src={'https://i.imgur.com/4Ow0WDX.png'}
                    />
                    <span className={'text-secondary ml-2'}>Pneumology</span>
                  </div>
                  <div
                    className={
                      'w-full flex items-center justify-center pt-4 pb-2'
                    }
                  >
                    <button
                      onClick={() => router.push('/Home')}
                      type={'button'}
                      className={
                        'w-auto justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-primary hover:text-primaryButtonHover focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:text-sm'
                      }
                    >
                      Requ. Appointment
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button
            onClick={() => router.push('/Home')}
            type={'button'}
            className={
              'w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-secondary hover:text-primaryButtonHover focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
            }
          >
            Okay
          </button>
        </div>
      )}
    </Auth>
  );
};

export default DiagnosisDetails;
