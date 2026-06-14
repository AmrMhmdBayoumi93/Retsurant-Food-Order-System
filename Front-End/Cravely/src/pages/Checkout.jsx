import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Checkout.module.css";
import DeliveryDetails from "../components/Checkout/DeliveryDetails/DeliveryDetails";
import PaymentMethod from "../components/Checkout/PaymentMethod/PaymentMethod";
import OrderSummary from "../components/Checkout/OrderSummary/OrderSummary";
import Navbar from "../components/Navbar/Navbar";
import HomeFooter from "../components/HomeFooter/HomeFooter";

const Checkout = () => {
  const [deliveryData, setDeliveryData] = useState({});
  const [paymentData, setPaymentData] = useState({});
  const navigate = useNavigate()

  const handlePlaceOrder = () => {
    console.log("Order placed!", { deliveryData, paymentData });
    navigate('/order-confirmation')
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>
        <h1 className={styles.heading}>Complete Your Order</h1>
        <div className={styles.layout}>
          <div className={styles.leftCol}>
            <DeliveryDetails onDetailsChange={setDeliveryData} />
            <PaymentMethod onPaymentChange={setPaymentData} />
          </div>
          <div className={styles.rightCol}>
            <OrderSummary onPlaceOrder={handlePlaceOrder} />
          </div>
        </div>
      </main>
      <HomeFooter />
    </div>
  );
};

export default Checkout;