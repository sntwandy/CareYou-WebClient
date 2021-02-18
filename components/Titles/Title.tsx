/**
 *
 */

import React, { ReactElement } from 'react';

interface IProps {
  title: string;
};

const Title = (props: IProps): ReactElement => {
  const { title } = props;
  return (
    <h1 className={'w-title h-title text-2xl font-medium flex items-center justify-center'}>{title}</h1>
  )
};

export default Title;
