import React from 'react';

const TipJarPrice = ({id, product_currency_code_value, handlePriceClick, price}) => {

  return (
    <div 
      className="btn btn-outline-success btn-pill"
      style={{marginRight: 10}}
      onClick={() => {
      handlePriceClick(id)
    }}>
      {product_currency_code_value} ${price/100}
    </div>
  )
}

export default TipJarPrice;