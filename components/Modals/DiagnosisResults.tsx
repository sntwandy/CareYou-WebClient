/**
 *
 */

import React, { FC, ReactElement, useEffect, useState } from 'react';
import { IDiagnosisModal } from '../../utils/interfaces';

const DiagnosisResults: FC<IDiagnosisModal> = (
  props: IDiagnosisModal
): ReactElement => {
  /* Destructuring Props */
  const {
    diagnosisModal,
    setDiagnosisModal,
    diagnosisResults,
    sendAnswer,
    setTermsConditionsAccepted,
  } = props;

  /* Initializations */

  /* Local State */
  const [backgroundStyle, setBackgroundStyle] = useState(
    'ease-in duration-200 opacity-0 invisible'
  );
  const [modalStyle, setModalStyle] = useState(
    'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 invisible'
  );
  const [pathologyValidation, setPathologyValidation] = useState<boolean>();

  /* Component Update */
  useEffect(() => {
    if (diagnosisModal) {
      setBackgroundStyle('ease-out duration-300 opacity-100 visible');
      setModalStyle(
        'ease-out duration-300 opacity-100 translate-y-0 sm:scale-100 visible'
      );
    } else {
      setBackgroundStyle('ease-in duration-200 opacity-0 invisible');
      setModalStyle(
        'ease-in duration-200 opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95 invisible'
      );
    }
  }, [diagnosisModal]);

  return (
    <div className={'fixed z-10 inset-0 overflow-y-auto'}>
      <div
        className={
          'flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'
        }
      >
        <div
          className={`${backgroundStyle} fixed inset-0 transition-opacity`}
          aria-hidden={'true'}
        >
          <div className={'absolute inset-0 bg-gray-500 opacity-75'} />
        </div>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className={'hidden sm:inline-block sm:align-middle sm:h-screen'}
          aria-hidden={'true'}
        >
          &#8203;
        </span>
        <div
          className={`${modalStyle} inline-block align-bottom bg-secondary rounded-tl-input rounded-br-input text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
          role={'dialog'}
          aria-modal="true"
          aria-labelledby={'modal-headline'}
        >
          <div className={'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'}>
            <div
              className={'sm:flex sm:items-center md:items-center md:flex-col'}
            >
              <div
                className={
                  'mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 sm:mx-0 sm:h-10 sm:w-10'
                }
              >
                {/* Heroicon name: outline/exclamation */}
                <img
                  src={
                    'https://res.cloudinary.com/dh9cghj6y/image/upload/v1617446057/CareYou/Icons/diagnosisResults/m3qzqr354iywb4mxv8nt.webp'
                  }
                  alt={'Diagnosis Results'}
                />
              </div>
              <div className={'mt-3 sm:mt-0 sm:ml-4 sm:text-center mb-4'}>
                <div className={'text-center'}>
                  <h3
                    className={'text-lg leading-6 font-medium text-gray-900'}
                    id={'modal-headline'}
                  >
                    Diagnosis Results:
                  </h3>
                </div>
              </div>
              <div className={'w-full'}>
                <p>
                  {diagnosisResults?.analysisResults?.pathologyName
                    ? diagnosisResults.analysisResults.pathologyName
                    : diagnosisResults?.analysisResults}
                </p>
              </div>
            </div>
          </div>
          <div
            className={
              'bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'
            }
          >
            {diagnosisResults?.analysisResults?.pathologyName ? (
              <>
                <button
                  type={'button'}
                  className={
                    'w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-secondary hover:text-primaryButtonHover focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                  }
                  onClick={() => {
                    sendAnswer(false);
                    setDiagnosisModal(!diagnosisModal);
                  }}
                >
                  No
                </button>
                <button
                  type={'button'}
                  className={
                    'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium bg-secondary text-primary hover:text-secondaryButtonHover border-button border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  }
                  onClick={() => {
                    sendAnswer(true);
                    setDiagnosisModal(!diagnosisModal);
                  }}
                >
                  Yes
                </button>
              </>
            ) : (
              <>
                <button
                  type={'button'}
                  className={
                    ' w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium text-secondary hover:text-primaryButtonHover focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                  }
                  onClick={() => {
                    setTermsConditionsAccepted(false);
                    setDiagnosisModal(!diagnosisModal);
                  }}
                >
                  See details
                </button>
                <button
                  type={'button'}
                  className={
                    'mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 text-base font-medium bg-secondary text-primary hover:text-secondaryButtonHover border-button border-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'
                  }
                  onClick={() => {
                    setTermsConditionsAccepted(false);
                    setDiagnosisModal(!diagnosisModal);
                  }}
                >
                  Okay
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosisResults;
