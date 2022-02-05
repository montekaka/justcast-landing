import React, {useEffect, useState, useContext} from "react";
import { useAtom } from "jotai";
import { loadStripe } from "@stripe/stripe-js";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import justcastApi from '../api/justcast'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import { addNotifcationAtom } from './../jotai'
import {Layout, SimplePageHeader, TipJarPrices, SupportUsButton} from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';
import patreon from './../assets/img/icons/social/patreon.svg'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Tipjar = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const id = props.match.params.id;
  const [prices, setPrices] = useState([]);
  const [accountId, setAccountId] = useState('');
  const [, addNotifcation] = useAtom(addNotifcationAtom);
  const {textColor, patreon_support_link, paypal_url, square_cash, buy_me_a_coffee_url } = state;
  
  // const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
  // let stripePromise;
  const _ = useShowQuery(id);  

  useEffect(() => {
    justcastApi.get((`/v1/shows/${id}/tip_jar_prices_public`))
    .then((res) => {
      setAccountId(res.data.stripe_user_id)
      setPrices(res.data.prices);
      // setPrices(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }, [id])  


  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      addNotifcation({title: "Success", message: "Order placed! You will receive an email confirmation.", active: true});
      // setMessage("Order placed! You will receive an email confirmation.");
    }
    if (query.get("canceled")) {
      addNotifcation({title: "Error", 
        message: "Order canceled -- continue to enjoy the podcast and tip to support when you're ready.",
        active: true});
    }
  }, []);  

  const handlePriceClick = (price_id) => {
    // console.log({price_id})
    let sessionId = '';

    justcastApi.post(`/v1/create-checkout-session/${price_id}`, {
      callback_url: `${process.env.REACT_APP_BASE_PATH}/shows/${id}/support_us`
    })
    .then((res) => {
      return res.data;
    })
    .then((session) => {
      sessionId = session.id;
      return loadStripe(process.env['REACT_APP_STRIPE_PUBLIC_KEY'], {
        stripeAccount: accountId
      });
          
    })
    .then((stripe) => {
      return stripe.redirectToCheckout({
        sessionId: sessionId
      })
    })
    .then((res) => {
      if(res.error) {
        console.log(res.error.message);
        // If `redirectToCheckout` fails due to a browser or network
        // error, display the localized error message to your customer
        // using `result.error.message`.
        const message = res.error.message;   
        addNotifcationAtom({title: 'Error', message, active: true})
      }
    })
    .catch((err) => {
      console.log(err);     
    })    
  }
  
  if(state.is_private) {
    return <PrivateShow/>;
  }
  
  return (
    <>
      <SimplePageHeader
        title={"Support Us"}
        text="Donating to your favorite podcasts helps them grow and improve."
      />
      <Layout>      
        <div className="container">
          <>
          {
            prices.length > 0 && <><div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="font-weight-bold" style={{color: textColor}}>How much would you like to tip?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-10">
              <TipJarPrices 
                prices={prices}
                handlePriceClick={handlePriceClick}
              />
            </div>
          </div></>
          }
          </>
                         
          <div className="row" style={{display: "flex", gap: "10px", justifyContent: 'center'}}>
            <SupportUsButton 
              name="patreon" 
              title="Become a patron" 
              url={patreon_support_link} 
              textColor={"#fff"}
              backgroundColor={"rgb(255, 66, 77)"}
            />
            <SupportUsButton 
              name="buy_me_a_coffee" 
              title="Buy me a coffee" 
              url={buy_me_a_coffee_url} 
              textColor={"#fff"}
              backgroundColor={"#ff6937"}
            /> 
            <SupportUsButton 
              name="paypal" 
              title="Support with PayPal" 
              url={paypal_url} 
              textColor={"#040404"}
              backgroundColor={"#EBEBEB"}
            /> 
            <SupportUsButton 
              name="square_cash" 
              title="Support with Cash App" 
              url={square_cash} 
              textColor={"#fff"}
              backgroundColor={"#005B2B"}
            />                                          
          </div>                    
          
        </div>
      </Layout>
    </>
  )
}

export default Tipjar;