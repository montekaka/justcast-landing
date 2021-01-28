import React from 'react';

const TipJarPrice = ({id, product_currency_code_value, handlePriceClick, price}) => {

  return (
    <div onClick={() => {
      handlePriceClick(id)
    }}>
      {product_currency_code_value} ${price/100}
    </div>
  )
}

export default TipJarPrice;