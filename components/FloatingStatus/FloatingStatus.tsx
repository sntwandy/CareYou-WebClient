
import { FC, ReactElement, useEffect, useState } from "react";

type Props = {
  data?: 'available' | 'busy' | 'absent'
  onChange?: (status: string) => void
}
export const FloatingStatus: FC<Props> = (props: Props): ReactElement => {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('available');

  useEffect(() => {
    props.onChange?.(status)
  }, [status])

  const renderStatus = (status: string = 'available') => {
    const STATUS_MAP: any = {
      'available':'#30F000',
      'busy': '#F00000',
      'absent': '#F09E00'
    }
    return <span className="mx-1" style={{ height: 20, width: 20, backgroundColor: STATUS_MAP[status], borderRadius: '50%', display: 'inline-block' }}></span>
  }

  return (
    <div className="relative inline-block text-left" style={{ left: 'calc(100% - 140px)' }}>
      {/* Icon button */}
      <div className={'flex items-center content-center justify-between bg-primary px-1 py-1'}
        style={{ borderRadius: '5px', width: 83 }}
        onClick={() => setOpen(!open)}
      >
        <img className={'transition-transform transform ' + (open ? 'rotate-180': '')} width="15px" src="https://i.imgur.com/PabGcvB.png" alt="Menu img" />
        {renderStatus(status)}
      </div>
      {/* Menu dropdown */}
      <div hidden={!open} className={(!open ? 'opacity-0': 'opacity-100') + ' transition-opacity transform flex items-start justify-top flex-col origin-top-right absolute left-0 mt-2 bg-primary shadow-lg text-secondary text-xs font-thin ring-1 ring-black ring-opacity-5 divide-y divide-gray-100'} style={{ borderRadius: '5px', width: 'auto' }} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div className="px-1 w-full flex items-start justify-start pt-1 pb-1 flex content-center justify-between" onClick={() => setStatus('available')} >
          Available {renderStatus('available')}
        </div>
        <div className="px-1 w-full flex items-start justify-start pt-1 pb-1 flex content-center justify-between" onClick={() => setStatus('busy')}>
          Busy {renderStatus('busy')}
        </div>
        <div className="px-1 w-full flex items-start justify-start pt-1 pb-1 flex content-center justify-between" onClick={() => setStatus('absent')}>
          Absent {renderStatus('absent')}
        </div>
      </div>
    </div>
  );
}
