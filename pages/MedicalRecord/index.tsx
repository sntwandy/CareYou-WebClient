/**
 *
 */

import React, { FC, ReactElement, useState } from 'react';
import Link from 'next/link';

// Hooks
import useInput from '../../hooks/useInput';

// Components
import RadioGroup from '../../components/Inputs/RadioGroup';
import Input from '../../components/Inputs/PrimaryInput';
import Button from '../../components/Buttons/PrimaryButton';
import Title from '../../components/Titles/Title';
import Menu from '../../components/Menu';

// MedicalRecord
const MedicalRecord: FC = (): ReactElement => {
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

  return (
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
    </div>
  );
};

export default MedicalRecord;
