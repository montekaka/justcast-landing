import React, {useEffect, useState, useContext} from "react";
import { loadStripe } from "@stripe/stripe-js";
import ReactGA from 'react-ga';
import {Link} from 'react-router-dom'
import justcastApi from '../api/justcast'
import {Context as PublicPodcastContext} from '../context/PublicPodcastContext'
import { useShowQuery } from '../hooks'
import {Layout, SimplePageHeader, TipJarPrices } from '../components/podcastpages'
import PrivateShow from './../components/PrivateShow';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const Tipjar = (props) => {
  const { state } = useContext(PublicPodcastContext);  
  const id = props.match.params.id;
  const [prices, setPrices] = useState([]);
  const [accountId, setAccountId] = useState('');
  
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
      }
    })
    .catch((err) => {
      console.log(err);
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.      
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
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 text-center">
              <h2 className="font-weight-bold">How much would you like to tip?</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-md-12 col-lg-10">
              <TipJarPrices 
                prices={prices}
                handlePriceClick={handlePriceClick}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Tipjar;