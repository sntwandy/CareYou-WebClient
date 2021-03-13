/**
 *
 */

import React, { ReactElement } from 'react';
import format from 'date-fns/format';
import { IRecordCardProps } from '../../utils/interfaces';

const RecordCard = (props: IRecordCardProps): ReactElement => {
  const { record } = props;
  return (
    <div className={'flex flex-wrap items-center justify-center bg-black text-white font-light text-sm rounded-tl-input rounded-br-input p-3'} style={{color: '#fff'}}>
      <div className={'flex mb-2'} style={{ width: '100%' }}>
        <div className={'flex flex-1'} style={{}}>
          <span className="mr-1">
            <img src={'https://i.imgur.com/8D02AvD.png'} alt={'Calendar Icon'} />
          </span>
          {format(record.date, 'yyyy/MM/dd')}
        </div>
        <div className={'flex flex-1 flex-row-reverse'} style={{ textAlign: 'end' }}>
          <img src={'https://i.imgur.com/0xEUuBg.png'} alt={'Calendar Icon'} />
        </div>
      </div>
      <div className={'flex'} style={{ width: '100%' }}>
        <div className={'flex flex-1 font-normal'}>
          <span className={'mr-1'}><img src={'https://i.imgur.com/6GOiFv8.png'} alt={'Calendar Icon'} /></span>
          {record.attendant}
        </div>
        <div className={'flex flex-1'}>
          <span className={'mr-1'}>
            <img src={'https://i.imgur.com/TxO70I1.png'} alt={'Notepad Icon'} />
          </span>
          {record.case}
        </div>
      </div>
    </div>
  )
};

export default RecordCard;
