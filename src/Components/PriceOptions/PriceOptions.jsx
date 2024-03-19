
import React from 'react';
import PropTypes from 'prop-types';
import PriceOption from '../PriceOption/PriceOption';

const PriceOptions = props => {
 const priceOptions=[
  {
    "id": "option_1",
    "name": "Single Visit Pass",
    "price": 15.99,
    "features": [
      "Access to gym facilities for one day",
      "No commitment, pay as you go"
    ]
  },
  {
    "id": "option_2",
    "name": "Monthly Membership",
    "price": 69.99,
    "features": [
      "Unlimited access to gym facilities",
      "Access to all group fitness classes",
      "Discounts on personal training sessions"
    ]
  },
  {
    "id": "option_3",
    "name": "Family Membership",
    "price": 129.99,
    "features": [
      "Unlimited access to gym facilities for all family members",
      "Access to all group fitness classes",
      "Exclusive family workout sessions",
      "Discounts on additional services"
    ]
  },
  {
    "id": "option_4",
    "name": "Premium Membership",
    "price": 199.99,
    "features": [
      "Unlimited access to gym facilities",
      "Access to all group fitness classes",
      "Unlimited personal training sessions",
      "Nutritional counseling sessions",
      "Sauna and spa access"
    ]
  }
]
  return (
    <div className='mx-10 space-y-6 mt-5'>
      <h2 className='text-5xl text-center'>Best price option in the town</h2>
     <div className='grid md:grid-cols-3 gap-4'>
     {
        priceOptions.map(option=><PriceOption key={option.id} option={option}></PriceOption>)
      }
     </div>
    </div>
  );
};

PriceOptions.propTypes = {
  
};

export default PriceOptions;