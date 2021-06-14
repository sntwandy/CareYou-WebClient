/**
 *
 */

import React, { FC, ReactElement, useState } from 'react';
import RadioGroup from '../../components/Inputs/RadioGroup';
import Input from '../../components/Inputs/PrimaryInput';
import RecordCard from '../../components/UI/RecordCard';
import Title from '../../components/Titles/Title';
import Menu from '../../components/Menu';
import useInput from '../../hooks/useInput';
import Auth from '../../utils/auth';
import { IRecordCard } from '../../utils/interfaces';

const MedicalRecord: FC = (): ReactElement => {

  /* Initializations */
  const { value: findFaster, bind: bindFindFaster } = useInput(true);
  const { bind: bindDateType } = useInput('recent');
  const { bind: bindDate } = useInput('');
  const boolOptions = [{
    text: 'Yes',
    value: true
  },{
    text: 'No',
    value: false
  }];
  const dateOptions = [{
    text: 'Most recent',
    value: 'recent'
  },{
    text: 'Older',
    value: 'older'
  }]
  const records: IRecordCard[] = [{
    date: new Date(),
    attendant: 'Megan Herrera',
    case: 'Flu'
  }];

  return (
    <Auth>
      <div className={'w-full h-full'}>
        <Menu />
        <div className={'flex items-center justify-center flex-col mb-9'}>
          <div className={'mb-6'}>
            <Title title={'Medical Record'} />
          </div>
        </div>
        <div className={'flex items-center justify-center flex-col'}>
          <RadioGroup options={boolOptions} {...bindFindFaster} name="yesOrNo" label="Would you like to find it faster?"/>
          {findFaster && (
            <div>
              <RadioGroup options={dateOptions} {...bindDateType} name="dateType" label="Date:"/>
              <Input {...bindDate} type="date" label="Date"/>
              <Input {...bindDate} type="select" label="Result:"/>
            </div>
          )}
        </div>
        <div className={'flex items-center justify-center flex-col'}>
          {records.map((record, index) => <RecordCard key={index} record={record} />)}
        </div>
      </div>
    </Auth>
  );
};

export default MedicalRecord;
