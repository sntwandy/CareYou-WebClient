/**
 *
 */

import React, { FC, ReactElement, useEffect, useState } from 'react';
import { IWarningModal } from '../../utils/interfaces';

const WarningToConfirm: FC<IWarningModal> = (props: IWarningModal): ReactElement => {

  /* Destructuring Props */
  const { warningModal, setWarningModal, message } = props;

  /* Local State */
  const [backgroundStyle, setBackgroundStyle] = useState('ease-in duration-200 opacity-0 invisible');
  const [modalStyle, setModalStyle] = useState('ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 invisible');

  /* Component Update */
  useEffect(() => {
    if (warningModal) {
      setBackgroundStyle('ease-out duration-300 opacity-100 visible');
      setModalStyle('ease-out duration-300 opacity-100 translate-y-0 sm:scale-100 visible');
    } else {
      setBackgroundStyle('ease-in duration-200 opacity-0 invisible');
      setModalStyle('ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 invisible');
    }
  }, [warningModal]);

  return (
    <div className={'fixed z-10 inset-0 overflow-y-auto'}>
      <div className={'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'}>
        <div className={`${backgroundStyle} fixed inset-0 transition-opacity`} aria-hidden={'true'}>
          <div className={'absolute inset-0 bg-gray-500 opacity-75'} />
        </div>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className={'hidden sm:inline-block sm:align-middle sm:h-screen'} aria-hidden={'true'}>&#8203;</span>
        <div className={`${modalStyle} inline-block align-bottom bg-secondary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`} role={'dialog'} aria-modal="true" aria-labelledby={'modal-headline'}>
          <div className={'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'}>
            <div className={'sm:flex sm:items-start'}>
              <div className={'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10'}>
                {/* Heroicon name: outline/exclamation */}
                <svg className={'h-6 w-6 text-red-600'} fill={'none'} viewBox={'0 0 24 24'} stroke={'currentColor'} aria-hidden={'true'}>
                  <path strokeLinecap={'round'} strokeLinejoin={'round'} strokeWidth={'2'} d={'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z'} />
                </svg>
              </div>
              <div className={'mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'}>
                <h3 className={'text-lg leading-6 font-medium text-gray-900'} id={'modal-headline'}>
                  {message}
                </h3>
              </div>
            </div>
          </div>
          <div className={'bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'}>
            <button
              type={'button'}
              className={'w-full inline-flex text-secondary justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium hover:text-primaryButtonHover focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'}
              onClick={() => {
                setWarningModal(!warningModal);
              }}
            >
              Ok
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export default WarningToConfirm;
