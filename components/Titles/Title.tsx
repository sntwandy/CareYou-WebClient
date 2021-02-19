/**
 *
 */

import React, { ReactElement } from 'react';

interface IProps {
  title: string;
  fontWeight?: string;
  fontSize?: string;
};

const Title = (props: IProps): ReactElement => {
  const { title, fontWeight = 'font-medium', fontSize = 'text-2xl'} = props;
  return (
    <h1 className={`w-title h-title flex items-center justify-center ${fontWeight} ${fontSize}`}>{title}</h1>
  )
};

export default Title;
