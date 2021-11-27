import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PaymentForm from './PaymentForm'

const PUBLIC_KEY = 'pk_test_51JyO3dK6p23MmlH3FwwfkGmbPkstaP7JIIWFZJi2jIZg0DFkVbIfBCHHG4GiNsFTPqyx4SaWxVDdrtTRRZG8zbHY00tkD19RF0'

const stripeTestPromise = loadStripe(PUBLIC_KEY)

// eslint-disable-next-line react/prop-types
export default function StripeContainer ({ price }) {
  const passedprice = price
  console.log(price)

  return (
  <Elements stripe={stripeTestPromise}><PaymentForm
            price={passedprice}/></Elements>
  )
}
