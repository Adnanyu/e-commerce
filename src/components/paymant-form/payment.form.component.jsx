import { useState, useContext} from 'react'
import { CartContext } from '../../contexts/cart.context'
import { useSelector } from 'react-redux'
import './payment.form.style.scss'
import Button from '../button.component/button.component'
import { CardElement , useElements, useStripe} from '@stripe/react-stripe-js'

const PaymentForm = () => {
    const stripe = useStripe()
    const element = useElements()
    const [isProcessingPayment , setIsProcessingPayment] = useState(false)

    const { cartTotal } = useContext(CartContext)
    const  currentUser  = useSelector((state) => state.user.currentUser)

    const paymentHandler = async(e) => {
        e.preventDefault();

        if(!stripe || !element){
            return;
        }
        setIsProcessingPayment(true)

        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'content-Type':'applicaton/json'
            },
            body: JSON.stringify({ amount: cartTotal * 100 })
        }).then( res => res.json());

        const { paymentIntent : { client_secret}} = response;

        const paymentResult = await stripe.confirmPayment(client_secret, {
            payment_method: {
                card: element.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',
                },
            }})
            setIsProcessingPayment(false)

            if (paymentResult.error){
                alert(paymentResult.error);
            }else {
                if (paymentResult.paymentIntent.status === 'succeded'){
                    alert('payment successfull');
                }
            }
    }
    return(
        <div className='payment-container'>
            <div className='form-container' onSubmit={paymentHandler}>
                <h2>CREADIT CARD PAYMENT</h2>
            <CardElement />
            <Button  disabled={isProcessingPayment} buttonType='inverted'> PAY NOW</Button>
            </div>
        </div>
    )
}
export default PaymentForm