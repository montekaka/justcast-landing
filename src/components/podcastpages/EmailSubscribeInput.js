import React, {useState} from "react";
import { Input, Button, Col, FormFeedback, FormText } from 'reactstrap';
import justcastApi from '../../api/justcast'

const EmailSubscribeInput = (props) => {
  const {show_id, show_form, textColor, buttonColor, buttonTextColor, button_text, success_message, button_title_message} = props;
  const [email, setEmail] = useState('');
  // const [errorMessage, setErrorMessage] = useState('');
  const [callbackMessage, setCallbackMessage] = useState({
    valid: false,
    invalid: false,
    message: ''
  })

  const handleEmailChanged = (event) => {
    setCallbackMessage({
      valid: false,
      invalid: false,
      message: ''
    });
    setEmail(event.target.value);
  }

  const handleSubmit = () => {
    justcastApi.post(`/v1/shows/${show_id}/add_mailchimp_subscriber`, {
      email_address: email,
      private_token: process.env.REACT_APP_MAILCHIMP_RAILS_SELF_DEFINE_TOKEN
    })
    .then((res) => {      
      setCallbackMessage({
        valid: true,
        invalid: false,
        message: res.data.message
      })      
    })
    .catch((err) => {      
      setCallbackMessage({
        valid: false,
        invalid: true,
        message: err.response.data.message
      })
    })
  }

  if(show_form) {
    return (
      <section>
        <div className="container">
          <div className="justify-content-center">
            <h3 className="text-center" style={{marginBottom: '20px', color: textColor}}>{button_title_message}</h3>           
          </div>
          <div className="row justify-content-center">
            <Col sm={6}>
              <Input 
                valid={callbackMessage.valid}
                invalid={callbackMessage.invalid}
                placeholder="Your email" 
                style={{borderColor: buttonColor}} 
                value={email} 
                onChange={handleEmailChanged}/>
                <FormFeedback>{callbackMessage.message}</FormFeedback>
                {callbackMessage.valid && <FormText>{callbackMessage.message}</FormText>}
            </Col>
          </div>        
          <div className="row justify-content-center" style={{marginTop: '20px'}}>
            <Button 
              onClick={handleSubmit}
              style={{backgroundColor: buttonColor, color: buttonTextColor}}>{button_text}</Button>
          </div>           
        </div>        
      </section>
    )
  }

  return null;
}

export default EmailSubscribeInput;