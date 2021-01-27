import React from 'react';

const TipJarPrice = ({product_currency_code_value, price}) => {
  
  return (
    <div>{product_currency_code_value} ${price/100}</div>
  )
}

export default TipJarPrice;