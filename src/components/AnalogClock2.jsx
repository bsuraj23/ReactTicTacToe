import { useClockHandDegrees } from '../customHooks/useClockHandDegrees';
import ClockHand from './ClockHand';
import './AnalogClock.css';

function AnalogClock() {
  const { secondsDegrees, minsDegrees, hourDegrees } = useClockHandDegrees();

  return (
    <div className='clock'>
      <div className='clock-face'>
        //need to add more clock with css changes 
      </div>
    </div>
  );
}

export default AnalogClock;
