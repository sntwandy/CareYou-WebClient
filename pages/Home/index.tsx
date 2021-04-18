/**
 *
 */

import React, { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import Title from '../../components/Titles/Title';
import WarningToConfirmModal from '../../components/Modals/WarningToConfirm';
import WarningModal from '../../components/Modals/Warning';
import DiagnosisModal from '../../components/Modals/DiagnosisResults';
import Button from '../../components/Buttons/PrimaryButton';
import Auth from '../../utils/auth';
import axios, { AxiosResponse } from 'axios';
import { ISearch, IUser, IDiagnosisResults } from '../../utils/interfaces';
import JWT from '../../utils/jwt';

/* ENV VARIABLES */
const DIAGNOSIS_URL = process.env.DIAGNOSIS_URL;
const GET_USER_URL = process.env.GET_USER_URL;

const Home: FC = (): ReactElement => {

  /* Mock Data */
  const data: ISearch[] = [
    { id: 1, name: 'Headache' },
    { id: 2, name: 'Fever' },
    { id: 3, name: 'Eye pain' },
    { id: 4, name: 'Sneezing' },
  ]

  /* Initializations */
  const filteredInitState: ISearch[] = [];
  const symptomsInitState: string[] = [];
  const diagnosisResultsInitState: IDiagnosisResults[] = [];
  const UserInitState: IUser = {
    birthDate: '',
    country: '',
    email: '',
    idCard: '',
    lastName: '',
    name: '',
    password: '',
    postalCode: '',
    province: '',
    suffering: '',
    userName: '',
  };

  /* Local State */
  const [token, setToken] = useState(String);
  const [userInfo, setUserInfo] = useState<IUser>();
  const [toDeleteSymptom, setToDeleteSymptom] = useState('');
  const [toDeleteSymptomConfirm, setToDeleteSymptomConfirm] = useState(false);
  const [filteredSymptoms, setFilteredSymptoms] = useState(filteredInitState);
  const [symptoms, setSymptoms] = useState(symptomsInitState);
  const [warningModalToConfirm, setWarningModalToConfirm] = useState(false);
  const [warningModal, setWarningModal] = useState(false);
  const [diagnosisModal, setDiagnosisModal] = useState(false);
  const [diagnosisResults, setDiagnosisResults] = useState(diagnosisResultsInitState);

  /* Functions */
  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    let filtered: ISearch[] = [];
    const searchString = e.target.value.toLowerCase();

    if (searchString == '') {
      setFilteredSymptoms([]);
    } else {
      filtered = data.filter((symptom) => {
        return symptom.name.toLocaleLowerCase().includes(searchString);
      });

      setFilteredSymptoms([
        ...filtered
      ]);
    };
  };

  const setMySymptoms = (symptom: string): void => {

    let repeatSymptom: boolean = false;

    for (const symp in symptoms) {
      symptoms[symp] === symptom && (repeatSymptom = true);
    };

    repeatSymptom ? setWarningModal(true) : setSymptoms([...symptoms, symptom]);
  };

  const deleteSymptom = (s: string): void => {
    setSymptoms(symptoms.filter(symptom => {
      return symptom !== s;
    }));
  };

  const startTest = async () => {
    const token = localStorage.getItem('Token');
    try {
      const response: AxiosResponse = await axios.post(`${DIAGNOSIS_URL}`, {
        "symptoms": symptoms
      },
      {
        headers: {
          'Authorization': token
        }
      }
      )
      setDiagnosisResults(response.data.body);
      setDiagnosisModal(true);
    } catch (error) {
      console.log(error)
    }
  };

  const newTest = () => {
    setSymptoms([]);
    setFilteredSymptoms([]);
  };

  const getUserInfo = async () => {
    const response: AxiosResponse = await axios.post(`${GET_USER_URL}`,{
        token
      },
      {
        headers: {
          'Authorization': token
        }
      }
    )
    delete response.data.body.password;
    delete response.data.body.email;
    delete response.data.body.idCard;
    delete response.data.body.birthDate;
    localStorage.setItem('UserInfo', JSON.stringify(response.data.body));
    setUserInfo(response.data.body)
  };

  /* Component Update */
  useEffect(() => {
    toDeleteSymptomConfirm && deleteSymptom(toDeleteSymptom);
    setToDeleteSymptomConfirm(false);
  }, [toDeleteSymptomConfirm])

  useEffect(() => {
    const token = localStorage.getItem('Token');
    token && setToken(token);
  }, [])

  useEffect(() => {
      token && JWT(token) ? getUserInfo() : null
  }, [token])

  return (
    <>
      <Auth>
        <div className={'w-full h-full'}>
          {/* Menu */}
          <Menu />
          {/* Title */}
          <div className={'flex items-center justify-center flex-col'}>
            <Title title={'Good Morning'} fontSize={'text-lg'} fontWeight={'font-light'} userName={userInfo?.name + " " + userInfo?.lastName} />
            <Title title={'Welcome to CareYou'} fontSize={'text-lg'} marginTop={'mt-2'} fontWeight={'font-light'} />
          </div>
          {/* Inputs */}
          <div className={'flex items-center justify-center flex-col mt-8'}>
            <div className={'flex items-center justify-center flex-col mb-3.5'}>
              <label htmlFor={'searchSymptoms'} className={'text-lg font-normal mb-2'}>Do you want to do a pre-diagnosis?</label>
              <input
                className={`w-primaryInput h-primaryInput text-lg text-center rounded-tl-input rounded-br-input outline-none bg-tertiary focus:ring-2 focus:ring-black`}
                type={'string'}
                name={'searchSymptoms'}
                placeholder={'Search your symptoms'}
                onChange={(e) => handleInputSearch(e)}
              />
              <div>
                <ul className={'w-primaryInput h-auto text-center mt-2'}>
                  {filteredSymptoms.map((item) => {
                    return (
                      <li
                        key={item.id}
                        onClick={(e) => setMySymptoms(e.currentTarget.innerText)}
                        className={'cursor-pointer'}
                      >
                          {item.name}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </div>
            <div className={'flex items-center justify-center flex-col'}>
              <label htmlFor={'symptomsSelected'} className={'text-lg font-normal mb-2'}>Your selected symptoms:</label>
              <div className={'w-primaryInput h-selectedSym text-lg text-start rounded-tl-input rounded-br-input outline-none bg-tertiary focus:ring-2 focus:ring-black'}>
                <ul className={'w-primaryInput h-selectedSym text-start p-4 flex items-start justify-start flex-wrap'}>
                    {symptoms.map((symp) => {
                      return (
                        <li key={symp} className={'pl-4'}>{symp}
                          <span className={'font-light cursor-pointer ml-2'} onClick={() => {
                            setToDeleteSymptom(symp)
                            setWarningModalToConfirm(!warningModalToConfirm)
                          }}>
                            X
                          </span>
                        </li>
                      )
                    })}
                </ul>
              </div>
            </div>
            <div className={'w-primaryInput mt-8 flex items-center justify-between flex-col'}>
              <div className={'mb-4'}>
                <Button label={'Start test'} onClick={startTest} full={true} />
              </div>
              <Button label={'New test'} inverted={true} onClick={newTest} />
            </div>
          </div>
          <div className={warningModalToConfirm ? 'visible': 'invisible'}>
            <WarningToConfirmModal
              warningModalToConfirm={warningModalToConfirm}
              setWarningModalToConfirm={setWarningModalToConfirm}
              toDeleteSymptom={toDeleteSymptom}
              setToDeleteSymptomConfirm={setToDeleteSymptomConfirm}
            />
          </div>
          <div className={warningModal ? 'visible': 'invisible'}>
            <WarningModal
              warningModal={warningModal}
              setWarningModal={setWarningModal}
              message={`You have already selected that symptom`}
            />
          </div>
          <div className={diagnosisModal ? 'visible': 'invisible'}>
            <DiagnosisModal
              diagnosisModal={diagnosisModal}
              setDiagnosisModal={setDiagnosisModal}
              diagnosisResults={diagnosisResults}
            />
          </div>
          {/* <button>Add</button> */}
        </div>
      </Auth>
    </>
  )
};

export default Home;
