/**
 *
 */

import React, { FC } from 'react';
import Menu from '../../components/Menu';
import Title from '../../components/Titles/Title';
import Auth from '../../utils/auth';

const DiagnosisDetails: FC = (): JSX.Element => {
  /* Initializations */

  return (
    <Auth>
      <div className={'w-full h-full'}>
        <Menu />
        <div
          className={
            'mb-6 w-full flex items-center justify-center flex-col mt-20'
          }
        >
          <img src={'https://i.imgur.com/0fwtpyU.png'} alt={'Notepad Icon'} />
          <Title title={'Pre-Diagnosis Details'} marginTop={'0'} />
          <span className={'mt-2'}>17/07/2021</span>
        </div>
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
            <span className={'text-secondary'}>
              You have the probability of Asthma
            </span>
          </div>
        </div>
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
            className={'max-w-xs flex items-center jusitfy-center flex-wrap'}
          >
            <div
              className={
                'pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary m-2'
              }
            >
              <span className={'text-secondary'}>Cough</span>
            </div>
            <div
              className={
                'pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary m-2'
              }
            >
              <span className={'text-secondary'}>Shortness of Breath</span>
            </div>
            <div
              className={
                'pt-2 pb-2 pl-4 pr-4 text-lg text-start rounded-tl-input rounded-br-input bg-primary m-2'
              }
            >
              <span className={'text-secondary'}>Chest pain or Tightness</span>
            </div>
          </div>
        </div>
      </div>
    </Auth>
  );
};

export default DiagnosisDetails;
