import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import axios from 'axios'
import React, { useState } from 'react'
import './PaymentForm.css'
import { Button } from '../Button'
import PropTypes from 'prop-types'

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#B4C6A6',
      color: '#66806A',
      fontWeight: 500,
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': { color: '#fce883' },
      '::placeholder': { color: '#87bbfd' }
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee'
    }
  }
}
PaymentForm.propTypes = {
  price: PropTypes.number.isRequired
}

export default function PaymentForm ({ price }) {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement)
    })

    if (!error) {
      try {
        const { id } = paymentMethod
        const response = await axios.post('http://localhost:4000/payment', {
          amount: price * 100,
          id
        })

        if (response.data.success) {
          console.log('Successful payment')
          setSuccess(true)
        }
      } catch (error) {
        console.log('Error', error)
      }
    } else {
      console.log(error.message)
    }
  }

  return (
        <>
        {!success
          ? <form onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement options={CARD_OPTIONS}/>
                </div>
            </fieldset>

            <Button buttonStyle='btn--primary' buttonSize="btn--medium" > Pay {price} </Button>

        </form>
          : <div>
           <h2>You just donated for the farms! This is the best decision of your life</h2>
       </div>
        }

        </>
  )
}
