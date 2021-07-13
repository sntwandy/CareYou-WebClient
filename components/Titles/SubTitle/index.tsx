/**
 *
 */

import React, { FC, ReactElement } from 'react';
import { ITitle } from '../../../utils/interfaces';

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
    <h3
      className={`w-title h-title flex capitalize items-center justify-center ${marginTop} ${fontWeight} ${fontSize}`}
    >
      {title} {userName && userName + ','}
    </h3>
  );
};

export default Title;
