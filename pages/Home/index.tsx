/**
 *
 */

import React, { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';

// Components
import Menu from '../../components/Menu';
import Title from '../../components/Titles/Title';

// Search interface type
interface ISearch {
  name: string
}

// Home Page
const Home: FC = (): ReactElement => {

  // Mock data [provisional]
  const data: ISearch[] = [
    { name: 'Headache' },
    { name: 'Fever' },
    { name: 'Eye pain' },
    { name: 'Sneezing' },
  ]

  // Filter init state
  const filteredInitState: ISearch[] = [];

  // Filtered symptoms state
  const [filteredSymptoms, setFilteredSymptoms] = useState(filteredInitState)

  // Handle input search
  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>) => {
    let filtered: ISearch[] = [];
    const searchString = e.target.value.toLowerCase();

    if (searchString == '') {
      setFilteredSymptoms([])
    } else {
      filtered = data.filter((symptom) => {
        return symptom.name.toLocaleLowerCase().includes(searchString)
      });
      setFilteredSymptoms([
        ...filtered
      ])
    }
    console.log(filteredSymptoms)
  }

  return (
    <div className={'w-full h-full'}>
      {/* Menu */}
      <Menu />
      {/* Title */}
      <div className={'flex items-center justify-center flex-col mt-20'}>
        <Title title={'Good Morning,'} fontSize={'text-lg'} fontWeight={'font-light'} />
        <Title title={'Welcome to CareYou'} fontSize={'text-lg'} fontWeight={'font-light'} />
      </div>
      {/* Inputs */}
      <div className={'flex items-center justify-center flex-col mt-8'}>
        <div className={'flex items-center justify-center flex-col mb-3.5'}>
          <label htmlFor="" className={'text-lg font-normal mb-2'}>Do you want to do a pre-diagnosis?</label>
          <input
            className={`w-primaryInput h-primaryInput text-lg text-center rounded-tl-input rounded-br-input outline-none bg-tertiary focus:ring-2 focus:ring-black`}
            type={'string'}
            placeholder={'Search your symptoms'}
            onChange={(e) => handleInputSearch(e)}
          />
          <div className={''}>
            <ul>
              {filteredSymptoms.map((item) => {
                return (
                  <li>{item.name}</li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* <button>Add</button> */}
    </div>
  )
};

export default Home;
