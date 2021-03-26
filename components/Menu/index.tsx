/**
 *
 */

import React ,{ FC, ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

/* Environments variables */
const BACKEND_URL = process.env.BACKEND_URL;

interface IProps {
  name: string;
  lastName: string;
};

const Menu: FC<IProps> = (props: IProps): ReactElement => {

  /* Initializations */
  const { name, lastName } = props;
  const router = useRouter();

  /* Local State */
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [menuOpenStyle, setMenuOpenStyle] = useState('transition ease-in duration-75 transform opacity-0 scale-95 translate-x-0');

  /* Functions */
  const logout = () => {
    localStorage.removeItem('Token');
    router.push('/Login');
  };

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
          <span className={'mt-4'}>{name} {lastName}</span>
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
            <img className={'w-menuIcon ml-4 mr-1'} src={'https://i.imgur.com/2KZ4j6y.png'} alt={'Home icon'}/>
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
              <button onClick={logout}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
