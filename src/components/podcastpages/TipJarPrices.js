import React from 'react';
import TipJarPrice from './TipJarPrice';

const TipJarPrices = (props) => {
  const {prices} = props;

  if(prices) {
    return (
      <>
      {
        prices.map((price) => 
          <TipJarPrice 
            key={price.id} 
            product_currency_code_value={price.product_currency_code_value}
            price={price.unit_amount}/>
        )
      }
      </>
    )
  }

  return null;
}

export default TipJarPrices;
