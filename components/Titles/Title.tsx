/**
 *
 */

import React, { FC, ReactElement } from 'react';
import { ITitle } from '../../utils/interfaces';

const Title: FC<ITitle> = (props: ITitle): ReactElement => {
  /* Destructuring Props */
  const {
    title,
    fontWeight = 'font-medium',
    fontSize = 'text-2xl',
    marginTop = 'mt-20',
    userName = '',
  } = props;

  return (
    <h1
      className={`w-title h-title flex items-center justify-center ${marginTop} ${fontWeight} ${fontSize}`}
    >
      {title} {userName && userName + ','}
    </h1>
  );
};

export default Title;
