import {
    Elements,
    PaymentElement,
    useElements,
    useStripe,
  } from "@stripe/react-stripe-js";
  import { loadStripe } from "@stripe/stripe-js";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import Spinner from "react-spinner-material";
  
  const stripePromise = loadStripe(
    "pk_test_51Q1gsfGf9kkOeJlI7RcVfJJoVOjMKUTQKX5ktBwBc67U5oSPooYSvcuLsGFMaLUo1GyzGbEIdoFAruBns7eHeFL4006g5Cp0Eu"
  );
  
  const CheckoutForm = ({ clientSecret }) => {
    const stripe = useStripe();
    const elements = useElements();
  
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      if (!stripe) {
        return;
      }
  
      if (!clientSecret) {
        return;
      }
  
      stripe
        .retrievePaymentIntent(clientSecret)
        .then(async ({ paymentIntent }) => {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Payment succeeded!");
              break;
            case "processing":
              setMessage("Your payment is processing.");
              break;
            case "requires_payment_method":
              setMessage("Fill in the data!");
              break;
            default:
              alert("Error in payment processing");
              setMessage("Something went wrong.");
              break;
          }
        });
    }, [stripe]);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      if (!stripe || !elements) {
        return;
      }
  
      setIsLoading(true);
  
      const { error } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: "http://localhost:5173/login",
        },
      });
  
      if (error.type === "card_error" || error.type === "validation_error") {
        setMessage(error.message);
      } else {
        setMessage("An unexpected error occurred.");
      }
  
      setIsLoading(false);
    };
  
    const paymentElementOptions = {
      layout: "tabs",
    };
  
    return (
      <form id="payment-form" onSubmit={handleSubmit}>
        <PaymentElement id="payment-element" options={paymentElementOptions} />
        <button
          className="bg-blue-500 text-white py-2 px-4 my-4 w-full hover:bg-blue-800"
          disabled={isLoading || !stripe || !elements}
          id="submit"
        >
          <span id="button-text" className="">
            {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
          </span>
        </button>
        {/* Show any error or success messages */}
        {message && <div id="payment-message">{message}</div>}
      </form>
    );
  };
  
  const PaymentComponent = ({ price }) => {
    const [loading, setLoading] = useState(true);
    const [secret, setSecret] = useState(null);
  
    const handleButtonClick = async () => {
      setLoading(true);
  
      const paymnetintent = await axios.post(
        "http://localhost:8080/api/v1/payment/intent",
        { amount: price * 100 }
      );
  
      console.log("stripe resp is : ", paymnetintent.data);
      setSecret(paymnetintent?.data?.paymentIntent);
      setLoading(false);
    };
  
    useEffect(() => {
      handleButtonClick();
    }, []);
  
    return (
      !loading &&
      <div className="bg-prim2 text-black px-20 py-20">
        <div>
          {!secret && (
            <div className=" bg-primary min-h-screen flex items-center justify-center">
              <Spinner className="text-white" color="white" />
            </div>
          )}
          <div>
            {secret && (
              <div className="py-20 px-44">
                <div className="text-white">
                  <Elements
                    stripe={stripePromise}
                    options={{ clientSecret: secret }}
                  >
                    <CheckoutForm clientSecret={secret} />
                  </Elements>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default PaymentComponent;