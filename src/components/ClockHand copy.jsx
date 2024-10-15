import PropTypes from 'prop-types';

function ClockHand({ type, degrees }) {
  return (
    <div
      className={`hand ${type}`}
      style={{ transform: `rotate(${degrees}deg)` }}
    ></div>
  );
}
//Change this when seconds are not in progress 
//add mroe of the base code before handling the actual clock
ClockHand.propTypes = {
  type: PropTypes.string.isRequired,
  degrees: PropTypes.number.isRequired,
};

export default ClockHand;
