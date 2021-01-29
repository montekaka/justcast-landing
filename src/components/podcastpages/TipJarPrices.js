import React from 'react';
import TipJarPrice from './TipJarPrice';

const TipJarPrices = (props) => {
  const {prices, handlePriceClick} = props;

  if(prices) {
    return (
      <div style={{display: "flex", justifyContent: 'center'}}>
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
      </div>
    )
  }

  return null;
}

export default TipJarPrices;
