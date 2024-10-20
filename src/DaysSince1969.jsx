import React from 'react';
import PropTypes from 'prop-types';

const DaysSince1969 = ({ date }) => {
  const calculateDaysSince1969 = (date) => {
    const startDate = new Date('1969-01-01');
    const currentDate = new Date(date);
    if (isNaN(currentDate)) {
        return 'Invalid date';
      }
    const timeDifference = currentDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
  };

  return (
    <div>
      <p>Days since January 1, 1969: {calculateDaysSince1969(date)}</p>
    </div>
  );
};

DaysSince1969.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DaysSince1969;
