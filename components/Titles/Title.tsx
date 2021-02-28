/**
 *
 */

import React, { FC, ReactElement } from 'react';

interface IProps {
  title: string;
  fontWeight?: string;
  fontSize?: string;
  marginTop?: string;
};

const Title: FC<IProps> = (props: IProps): ReactElement => {
  const { title, fontWeight = 'font-medium', fontSize = 'text-2xl', marginTop = 'mt-20'} = props;
  return (
    <h1 className={`w-title h-title flex items-center justify-center ${marginTop} ${fontWeight} ${fontSize}`}>{title}</h1>
  )
};

export default Title;
