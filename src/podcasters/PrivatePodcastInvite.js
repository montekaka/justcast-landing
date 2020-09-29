import React, {useEffect, useState} from "react";
import { Form, FormGroup, Label, Input, FormFeedback, Button, Alert } from 'reactstrap';
import justcastApi from '../api/justcast'
import RightSideCoverImage from './../components/RightSideCoverImage'

const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PrivatePodcastInvite = (props) => {
  const showId = props.match.params.show_id;
  const id = props.match.params.id;
  const [show, setShow] = useState({});  
  const [backgroundImage, setBackgroundImage] = useState('')
  const [email, setEamil] = useState('');
  // const [validEmail, setValidEmail] = useState(false);
  const [inputValid, setInputValid] = useState(false);
  const [message, setMessage] = useState("");


  useEffect(() => {
    justcastApi.get(`/v1/shows/${showId}`)
    .then((res) => {
      const data = res.data;
      setShow(data)
      
      // setBackgroundImage("https://source.unsplash.com/1600x900/?"+data.show.name.split(' ').join(','))
      setBackgroundImage(data.artwork_url_256)
    })
    .catch((err) => {
      console.log(err);
    })
  }, [id])

  const handleInputChange = (e) => {
    setEamil(e.target.value)
  }

  const clickSubmit = (event) => {
    event.preventDefault();
    if(email) {
      const isEmail = re.test(email.toLowerCase());
      if(isEmail) {
        setInputValid(false);
        // make send the request
        justcastApi.post(`/v1/shows/${showId}/access`, {
          email_address: email
        })
        .then((res) => {
          setMessage(res.data.message)
        })
        .catch((err) => {
          setMessage(err.message)
        })
        
        setEamil("");
      } else {
        setInputValid(true);
      }
    } else {
      setInputValid(true);
    }

    setTimeout(() => {
      setInputValid(false);
    }, 3000)
  }

  return (
    <section style={{backgroundColor: "#F1F4F8"}}>
      <div className="container d-flex flex-column">
        <div className="row align-items-center justify-content-center no-gutters min-vh-100">
          <div className="col-12 col-md-6 col-lg-4 py-8 py-md-11">
            <div className="private-podcast-subscribers-page-artwork-container">
              <img src={show.artwork_url_256} alt="podcast artwork" className="private-podcast-subscribers-page-artwork"/>
            </div>
            <h1 className="mb-0 font-weight-bold ">{show.name}</h1>
            <p className="mb-6">A secret podcast feed just for {show.name} members</p>            
            <hr/>
            {
              message ? <>
                <Alert color="secondary">{message}</Alert>
              </> : <>
                <h3>Join this Private Podcast</h3>
                <Form onSubmit={clickSubmit}>
                  <FormGroup>
                    <Label for="email">What is your email address?</Label>
                    <Input 
                      type="email" 
                      placeholder="you@example.com"
                      value={email}
                      name="email"
                      invalid={inputValid}
                      onChange={handleInputChange}
                    />
                    <FormFeedback 
                    >
                      Please make sure your email address is correct.
                    </FormFeedback>
                  </FormGroup>
                  <Button 
                    color="warning" 
                    size="lg" 
                    block
                    onClick={clickSubmit}
                  >
                      VERIFY EMAIL &#38; SUBSCRIBE
                  </Button>
                </Form>
              </>
            }            
          </div>
          <RightSideCoverImage imageURL={backgroundImage}/>          
        </div>        
      </div>

    </section>    
  )
}

export default PrivatePodcastInvite;