import React from 'react';

const NumbersDivisibleByThree = ({ numbers }) => {
  return (
    <div>
      <h3>Numbers Divisible by 3</h3>
      <ul>
        {numbers.filter(number => number % 3 === 0).map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
};

export default NumbersDivisibleByThree;