import React from 'react';
import TipJarPrice from './TipJarPrice';

const TipJarPrices = (props) => {
  const {prices, handlePriceClick} = props;

  if(prices) {
    return (
      <>
      {
        prices.map((price) => 
          <TipJarPrice 
            key={price.id} 
            id={price.id}
            product_currency_code_value={price.product_currency_code_value}
            price={price.unit_amount}
            handlePriceClick={handlePriceClick}
          />
        )
      }
      </>
    )
  }

  return null;
}

export default TipJarPrices;
