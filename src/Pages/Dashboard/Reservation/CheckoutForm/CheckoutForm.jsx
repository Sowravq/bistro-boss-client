import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure"
import useCart from "../../../../Hooks/useCart"
import { AuthContext } from "../../../../providers/AuthProvader";

const CheckoutForm = () => {
    const [clientSecret, setClientSecret] = useState("");
    const [succeeded,setSucceeded] = useState('')
    const {information}= useContext(AuthContext);
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure =useAxiosSecure();
    const [cart,refetch]= useCart();
    const totalPrice = cart.reduce((total,item)=>total + item.price,0)
    console.log(totalPrice);

useEffect(()=>{
  if(totalPrice>0){
    axiosSecure.post('/create-payment-intent', {price: totalPrice})
    .then(res=>{
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret)
    })
  }
},[axiosSecure,totalPrice])


    const handleSubmit =async(event)=>{
        event.preventDefault();
        if(!stripe || !elements){
            return
        }
        const card = elements.getElement(CardElement)
        if(card === 'null'){
            return
        }

        const {error,paymentMethod}= await stripe.createPaymentMethod({
            type: 'card',
            card,
        })
        if (error) {
            console.log('[error]', error);
          } else {
            console.log('[PaymentMethod]', paymentMethod);
          }


const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card:card,
        billing_details:{
            email:information?.email || 'null',
            name:information?.name  || 'null'
        }
    }
})
if(confirmError){
    console.log('confirmError',confirmError);
}else{
    console.log('paymentIntent',paymentIntent);
    if(paymentIntent.status ==="succeeded"){
        setSucceeded( paymentIntent.id)
        const payment = {
            email: information?.email,
            price: totalPrice,
            transactionId: paymentIntent.id,
            date: new Date(),
            cardIds: cart.map(item=>item._id),
            menuItemIds: cart.map(item=>item.cartId ),
            status: 'pending'
        }
        const res = await axiosSecure.post('/payments',payment)
         console.log(res.data);
         if(res.data.paymentResult.insertedId){
            alert('payment successful')
         }
         refetch()
    }
}

    }
    return (
        <form onSubmit={handleSubmit} className="bg-slate-200 p-10 mt-14">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
           <div className="flex justify-center mt-10 btn bg-yellow-600">
           <button type="submit" disabled={!stripe || !clientSecret }>
                Pay
            </button>
            </div>
            {succeeded?<p className="text-green-500">Payment successful and Your transaction id:{succeeded}</p>:''}

        </form>
    );
};

export default CheckoutForm;