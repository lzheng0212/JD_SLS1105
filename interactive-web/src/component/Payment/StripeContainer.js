import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
import CheckoutForm from "./CheckoutForm"
import { useLocation, Redirect } from "react-router";


const PUBLIC_KEY = "pk_test_51JyO3dK6p23MmlH3FwwfkGmbPkstaP7JIIWFZJi2jIZg0DFkVbIfBCHHG4GiNsFTPqyx4SaWxVDdrtTRRZG8zbHY00tkD19RF0"

const stripeTestPromise = loadStripe(PUBLIC_KEY)


export default function StripeContainer({price}) {
    const passedprice = price;
    console.log(price)
    
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm
            price={passedprice}
          />
		</Elements>
	)
}