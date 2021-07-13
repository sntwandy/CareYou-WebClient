/**
 *
 */

import React, { FC, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import { useRouter } from 'next/router';
import Title from '../../components/Titles/Title';
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
            <Title
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
            <Title
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
          <div
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
            <Title
              title={'Asthma Symptoms:'}
              fontSize={'text-xl'}
              marginTop={'0'}
            />
            <div
              className={
                'w-primaryInput pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary'
              }
            >
              <ul>
                <li className={'mb-2 mt-2'}>
                  <div className={'flex items-center justify-start'}>
                    <span className={'text-secondary'}>
                      Shortness of Breath
                    </span>
                    <img
                      className={'ml-4'}
                      width={30}
                      height={30}
                      src={'https://i.imgur.com/0xEUuBg.png'}
                      alt={'Notepad Icon'}
                    />
                  </div>
                </li>
                <li className={'mb-2 mt-2'}>
                  <div className={'flex items-center justify-start'}>
                    <span className={'text-secondary'}>
                      Chest pain or Tightness
                    </span>
                    <img
                      className={'ml-4'}
                      width={30}
                      height={30}
                      src={'https://i.imgur.com/0xEUuBg.png'}
                      alt={'Notepad Icon'}
                    />
                  </div>
                </li>
                <li className={'mb-2 mt-2'}>
                  <div className={'flex items-center justify-start'}>
                    <span className={'text-secondary'}>
                      Wheezing when Exhaling
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Pathologies Q/A */}
          <div
            className={
              'mb-6 w-full flex items-center justify-center flex-col mt-10'
            }
          >
            <img
              width={30}
              height={30}
              src={'https://i.imgur.com/lqK8i6E.png'}
              alt={'Notepad Icon'}
            />
            <Title
              title={'Pathologies Q/A'}
              fontSize={'text-xl'}
              marginTop={'0'}
            />
            <div className={'max-w-prediagDeta w-full'}>
              {analysis?.analysis[0]?.pathologies?.map((pathology, index) => (
                <div className={'flex items-center justify-start mt-2 mb-2'}>
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