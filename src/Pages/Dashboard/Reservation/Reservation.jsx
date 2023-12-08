import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm/CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMANT_KEY);
 
const Reservation = () => {
    return (
        <div>
            <p className="text-4xl font-bold text-center">Payment</p>

            <div>
               <Elements stripe={stripePromise}>
                       <CheckoutForm></CheckoutForm>
               </Elements>
            </div>
        </div>
    );
};

export default Reservation;