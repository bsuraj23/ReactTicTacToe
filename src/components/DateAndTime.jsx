import PropTypes from 'prop-types';

function DateAndTime({ type, degrees }) {
  //adding new style as this is new component 
  //adding new css framw work for the react project 
  return (
    <div
      className={`hand ${type}`}
    
    ></div>
  );
}


export default ClockHand;
