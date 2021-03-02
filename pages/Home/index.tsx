/**
 *
 */

import React, { ChangeEvent, FC, ReactElement, useEffect, useState } from 'react';

// Components
import Menu from '../../components/Menu';
import Title from '../../components/Titles/Title';

// Search interface type
interface ISearch {
  id: number;
  name: string;
}

// Home Page
const Home: FC = (): ReactElement => {

  // Mock data [provisional]
  const data: ISearch[] = [
    { id: 1, name: 'Headache' },
    { id: 2, name: 'Fever' },
    { id: 3, name: 'Eye pain' },
    { id: 4, name: 'Sneezing' },
  ]

  // Init states
  const filteredInitState: ISearch[] = [];
  const symptomsInitState: string[] = []

  // States
  const [filteredSymptoms, setFilteredSymptoms] = useState(filteredInitState)
  const [symptoms, setSymptoms] = useState(symptomsInitState)

  // Handle input search [filter]
  const handleInputSearch = (e: ChangeEvent<HTMLInputElement>): void => {
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
  }

  // Handle the event, to set the symptoms
  const setMySymptoms = (symptom: string): void => {

    let repeatSymptom: boolean = false

    for (const symp in symptoms) {
      symptoms[symp] === symptom && (repeatSymptom = true)
    }

    repeatSymptom ? alert(`You have already selected "${symptom}" symptom`) : setSymptoms([...symptoms, symptom])
  }

  // Handle delete symptom
  const deleteSymptom = (s: string): void => {
    setSymptoms(symptoms.filter(symptom => {
      return symptom !== s
    }))
  }

  // Handle component update
  useEffect(() => {
    console.table(symptoms)
  }, [symptoms])

  return (
    <div className={'w-full h-full'}>
      {/* Menu */}
      <Menu />
      {/* Title */}
      <div className={'flex items-center justify-center flex-col'}>
        <Title title={'Good Morning,'} fontSize={'text-lg'} fontWeight={'font-light'} />
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
                  <li key={item.id} onClick={(e) => setMySymptoms(e.currentTarget.innerText)} className={'cursor-pointer'}>{item.name}</li>
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
                    <li className={'pl-4'}>{symp}
                      <span className={'font-light cursor-pointer ml-2'} onClick={() => {
                        alert(`Are you sure you want to delete "${symp}" symptom?`)
                        deleteSymptom(symp)
                      }}>
                        X
                      </span>
                    </li>
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
