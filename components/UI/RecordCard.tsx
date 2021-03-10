/**
 *
 */

import React, { ReactElement } from 'react';
import format from 'date-fns/format';

export interface IRecord {
  date: Date;
  attendant: String;
  case: String;
}

interface IProps {
  record: IRecord;
};

const RecordCard = (props: IProps): ReactElement => {
  const { record } = props;
  return (
    <div className={'flex flex-wrap items-center justify-center bg-black text-white font-extralight text-sm rounded-tl-input rounded-br-input p-3'} style={{color: '#fff'}}>
      <div className="flex" style={{ width: '100%' }}>
        <div className="flex flex-1" style={{}}>
          <span className="mr-2">📅</span>
          {format(record.date, 'yyyy/MM/dd')}
        </div>
        <div className="flex flex-1 flex-row-reverse" style={{ textAlign: 'end' }}>
          <span>✅</span>
        </div>
      </div>
      <div className="flex" style={{ width: '100%' }}>
        <div className="flex flex-1" style={{display: 'block-inline'}}>
          <span className="mr-2">👨🏻‍⚕️</span>
          {record.attendant}
        </div>
        <div className="flex flex-1">
          <span className="mr-2">📄</span>
          {record.case}
        </div>
      </div>
    </div>
  )
};

export default RecordCard;
