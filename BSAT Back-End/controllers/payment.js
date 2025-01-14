import Stripe from "stripe";


const stripe = new Stripe(
  "sk_test_51Q2M4ZEYfaSqGpmezX0F1MGt13NDgZSoMgjJqi4tXmvyGLv6jVvQNatyMX3rNQ0EZHopQJMVmEcx1jFo2x09VJO900odSQvqDq"
);

export const paymentController = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: req.body.amount,
      description: "Your payment description here",
      currency: "aud",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    res.json({ paymentIntent: paymentIntent.client_secret });
  } catch (e) {
    res.status(500).json({
      error: e.message,
    });
  }
};
