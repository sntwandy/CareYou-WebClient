/**
 *
 */

import React ,{ FC, ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';

const Menu: FC = (): ReactElement => {

  /* Local State */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuOpenStyle, setMenuOpenStyle] = useState('transition ease-in duration-75 transform opacity-0 scale-95 translate-x-0');

  /* Component Update */
  useEffect(() => {
    if (menuIsOpen) {
      setMenuOpenStyle('transform opacity-100 scale-100 transition ease-out duration-100 translate-x-4 visible')
    } else {
      setMenuOpenStyle('transition ease-in duration-75 transform opacity-0 scale-95 invisible')
    }
  }, [menuIsOpen]);

  return (
    <>
      <div className="relative inline-block text-left">
        {/* Menu icon button */}
        <div className={'flex items-center justify-center w-menuButton h-menuButton bg-primary rounded-br-input rounded-tr-input'}
          onClick={() => {
            setMenuIsOpen(!menuIsOpen);
          }}
        >
          <img className={'w-menuIcon'} src="https://i.imgur.com/dNWZ3zh.png" alt="Menu img"/>
        </div>
      </div>
      {/* Menu dropdown */}
      <div className={`${menuOpenStyle} flex items-start justify-top flex-col w-menu h-menu origin-top-right absolute left-0 mt-2 rounded-input bg-primary shadow-lg text-secondary ring-1 ring-black ring-opacity-5 divide-y divide-gray-100`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className={'flex items-center justify-center flex-col w-full pt-10 pb-10'}>
          <img className={'w-menuImg'} src="https://i.imgur.com/vrjAdf8.png" alt="Menu img"/>
          <span className={'mt-4'}>Zeus Amenadiel</span>
        </div>
        <div className="py-1 w-full flex items-start justify-start pt-4 pb-4">
          <img className={'w-menuIcon ml-4 mr-1'} src="https://i.imgur.com/I7j7gYQ.png" alt="Home icon"/>
          <Link href={'/Home'}>Home</Link>
        </div>
        <div className="py-1 w-full flex items-start justify-start pt-4 pb-4 flex-col">
          <div className={'flex items-center justify-start'}>
            <img className={'w-menuIcon ml-4 mr-1'} src={'https://i.imgur.com/khkvbwh.png'} alt={'Home icon'}/>
            <Link href={'/'}>Appointment</Link>
          </div>
          <div className={'flex items-center justify-start mt-4'}>
            <img className={'w-menuIcon ml-2 mr-1'} src={'https://i.imgur.com/2KZ4j6y.png'} alt={'Home icon'}/>
            <Link href={'/MedicalRecord'}>Medical Record</Link>
          </div>
        </div>
        <div className="py-1 w-full flex items-start justify-start pt-4 pb-4 flex-col">
          <div className={'flex items-center justify-start'}>
            <img className={'w-menuIcon ml-4 mr-1'} src={'https://i.imgur.com/XtDqCeA.png'} alt={'Home icon'}/>
            <Link href={'/'}>Settings</Link>
          </div>
          <div className={'flex items-center justify-start mt-4'}>
            <img className={'w-menuIcon ml-4 mr-1'} src={'https://i.imgur.com/htDTXgq.png'} alt={'Home icon'}/>
            <Link href={'/Login'}>Logout</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
