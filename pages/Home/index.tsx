/**
 *
 */

import React, { FC, ReactElement } from 'react';

// Components
import Menu from '../../components/Menu';
import Title from '../../components/Titles/Title';
import Input from '../../components/Inputs/PrimaryInput';

// Hooks
import useInput from '../../hooks/useInput';

// Home Page
const Home: FC = (): ReactElement => {
  const { value: symptoms, bind: bindSymptoms } = useInput('')
  const handleInput = () => {
    console.log(symptoms)
  }
  return (
    <div className={'w-full h-full'}>
      {/* Menu */}
      <Menu />
      {/* Title */}
      <div className={'flex items-center justify-center flex-col'}>
        <Title title={'Good Morning,'} fontSize={'text-lg'} fontWeight={'font-light'} />
        <Title title={'Welcome to CareYou'} fontSize={'text-lg'} fontWeight={'font-light'} />
      </div>
      {/* Inputs */}
      <div className={'flex items-center justify-center flex-col'}>
        <Input label={'Do you want to do a pre-diagnosis?'} placeholder={'Choose your symptoms'} required={true} {...bindSymptoms} />
      </div>
    </div>
  )
};

export default Home;
