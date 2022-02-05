import React, {useState, useEffect} from 'react';
import square_cash from '../../assets/img/icons/social/square_cash.svg'
import buy_me_a_coffee from '../../assets/img/icons/social/buy_me_a_coffee.svg'
import paypal from '../../assets/img/icons/social/paypal.svg'
import patreon from '../../assets/img/icons/social/patreon.svg'

export default function SupportUsButton({name, title, url, backgroundColor, textColor}) {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if(name === 'patreon') {
      setIcon(patreon);
    } else if (name === 'square_cash') {
      setIcon(square_cash)
    } else if (name === 'buy_me_a_coffee') {
      setIcon(buy_me_a_coffee)
    } else if (name === 'paypal') {
      setIcon(paypal)
    }
  }, [name])
  
  if(name && url) {
    return (
      
        <a className="lift" href={url} style={{
          textDecoration: "none",
          color: textColor
        }}>
          <div style={{
            // backgroundColor: "rgb(255, 66, 77)",
            backgroundColor,
            width: '240px',
            height: '60px',
            display: 'flex',
            gap: '5px',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
            borderRadius: "30px"            
          }}>
            <img src={icon} width="36px" height="36px"/>
            {/* <div>Become a patron</div> */}
            <div>{title}</div>
          </div>
        </a>
      
    );    
  }

  return null;
  
}
