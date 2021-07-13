/**
 *
 */

import React, { FC, useEffect, useState } from 'react';
import SubTitle from '../Titles/SubTitle';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios';
import { IProfessionals } from '../../utils/interfaces';

/* ENV VARIABLES */
const GET_PROFESSIONAL_RECOMMENDATIONS_URL =
  process.env.GET_PROFESSIONAL_RECOMMENDATIONS;

const recommendations: FC = () => {
  /* Intializations */
  const router = useRouter();

  /* Local State */
  const [professionals, setProfessionals] = useState<IProfessionals[]>([]);

  /* Component Update */
  useEffect(() => {
    getProfessionals();
  }, [GET_PROFESSIONAL_RECOMMENDATIONS_URL]);

  /* Functions */
  const getProfessionals = async () => {
    const token = localStorage.getItem('Token');
    try {
      const response: AxiosResponse = await axios.get(
        `${GET_PROFESSIONAL_RECOMMENDATIONS_URL}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setProfessionals(response.data.body);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={'mb-6 w-full flex items-center justify-start flex-col mt-10'}
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
          {professionals?.map((professional, index) => (
            <li
              id={`${professional.name} + ${index}`}
              className={
                'w-professionalRecommendation h-professionalRecommendation min-w-professionalRecommendation ml-4 mr-4 pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary flex items-center justify-between flex-col'
              }
            >
              <div className={'flex items-center justify-start'}>
                <img
                  width={30}
                  height={30}
                  src={'https://i.imgur.com/EFGVCkB.png'}
                />
                <span className={'text-secondary ml-2'}>
                  {professional.name} {professional.lastName}
                </span>
              </div>
              <div
                className={
                  'flex items-center text-center justify-center flex-col'
                }
              >
                <span className={'text-secondary text-sm'}>
                  {professional.description}
                </span>
              </div>
              <div className={'flex items-center justify-start'}>
                <img
                  width={30}
                  height={30}
                  src={'https://i.imgur.com/4Ow0WDX.png'}
                />
                <span className={'text-secondary ml-2'}>
                  {professional.specialties[0]}
                </span>
              </div>
              <div
                className={'w-full flex items-center justify-center pt-4 pb-2'}
              >
                <button
                  onClick={() => router.push('/Home')}
                  type={'button'}
                  className={
                    'w-full justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-secondary text-base font-medium text-primary hover:text-primaryButtonHover focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:text-sm'
                  }
                >
                  Requ. Appointment
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default recommendations;
