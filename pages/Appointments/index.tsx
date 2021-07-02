/**
 *
 */

import React, { FC, ReactElement, useState } from 'react';
import RecordCard from '../../components/UI/RecordCard';
import Title from '../../components/Titles/Title';
import Menu from '../../components/Menu';
import Auth from '../../utils/auth';
import { IRecordCard } from '../../utils/interfaces';
import { FloatingStatus } from '../../components/FloatingStatus/FloatingStatus';



const MedicalRecord: FC = (): ReactElement => {

  /* Initializations */
  const records: IRecordCard[] = [{
    date: new Date(),
    attendant: 'Megan Herrera',
    case: 'Flu',
  }, {
    date: new Date(),
    attendant: 'Megan Herrera',
    case: 'Flu'
  }, {
    date: new Date(),
    attendant: 'Megan Herrera',
    case: 'Flu'
  }];

  return (
    <Auth>
      <div className={'w-full h-full'}>
        <Menu />
        <FloatingStatus />
        <div className={'flex items-center justify-center flex-col mb-9'}>
          <div className={'mb-6'}>
            <Title
              title={'Welcome to CareYou'}
              fontSize={'text-lg'}
              marginTop={'mt-2'}
              fontWeight={'font-light'}
            />
            <Title
              title={"Today's Appointments"}
              fontSize={'text-lg'}
              marginTop={'mt-2'}
              fontWeight={'font-bold'}
            />
          </div>
        </div>
        <div className={'flex items-center justify-center flex-row overflow-x-auto'} style={{ display: '-webkit-inline-box' }}>
          {records.map((record, index) => <RecordCard key={index} record={record} dateFormat={'yyyy/MM/dd hh:mm a'} />)}
        </div>
      </div>
    </Auth>
  );
};

export default MedicalRecord;
