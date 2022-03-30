import { loadStripe } from '@stripe/stripe-js'

let stripePromise;

const getStripe = () => {
   if (!stripePromise) {
      // stripePromise = loadStripe(process.env.STRIPE_API_KEY);
      stripePromise = loadStripe('pk_test_51KiIuwCwWHwnAehUTPy7H77Z4vp9wOVIt1Z5ViSDmDV69wfGecAE1vkS5ke7w0X9TYOnnEyC1CwoSdUoYn0Gp818007raG3Oks');
   }

   return stripePromise;
}

export default getStripe;