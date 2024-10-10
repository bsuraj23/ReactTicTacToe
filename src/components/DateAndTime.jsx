import PropTypes from 'prop-types';

function DateAndTime({ type, degrees }) {
  //adding new style as this is new component 
  return (
    <div
      className={`hand ${type}`}
    
    ></div>
  );
}


export default ClockHand;
