import React from 'react';

const TipJarPrice = ({id, product_currency_code_value, stripe_payment_url, price}) => {

  return (
    <a 
      className="btn btn-outline-success btn-pill"
      style={{marginRight: 10}}
      href={stripe_payment_url}
    >
      {product_currency_code_value} ${price/100}
    </a>
  )
}

export default TipJarPrice;