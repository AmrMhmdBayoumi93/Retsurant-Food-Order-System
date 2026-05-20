import { useState } from "react";
import styles from "./PaymentMethod.module.css";
import { CreditCard, Banknote, Smartphone } from "lucide-react";

const PaymentMethod = ({ onPaymentChange }) => {
  const [method, setMethod] = useState("credit"); 
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handleMethod = (m) => {
    setMethod(m);
    onPaymentChange?.({ method: m });
  };


  const handleCardNumber = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 16);
    const formatted = raw.match(/.{1,4}/g)?.join(" ") || raw;
    setCardNumber(formatted);
    onPaymentChange?.({ method, cardNumber: formatted, expiry, cvv });
  };


  const handleExpiry = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 4);
    const formatted = raw.length > 2 ? raw.slice(0, 2) + "/" + raw.slice(2) : raw;
    setExpiry(formatted);
    onPaymentChange?.({ method, cardNumber, expiry: formatted, cvv });
  };

  const handleCvv = (e) => {
    const raw = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(raw);
    onPaymentChange?.({ method, cardNumber, expiry, cvv: raw });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Payment Method</h2>

   
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${method === "credit" ? styles.active : ""}`}
          onClick={() => handleMethod("credit")}
        >
          <CreditCard size={20} />
          <span>Credit Card</span>
        </button>
        <button
          className={`${styles.tab} ${method === "apple" ? styles.active : ""}`}
          onClick={() => handleMethod("apple")}
        >
          <Smartphone size={20} />
          <span>Apple Pay</span>
        </button>
        <button
          className={`${styles.tab} ${method === "cash" ? styles.active : ""}`}
          onClick={() => handleMethod("cash")}
        >
          <Banknote size={20} />
          <span>Cash</span>
        </button>
      </div>


      {method === "credit" && (
        <div className={styles.form}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>CARD NUMBER</label>
            <div className={styles.inputWrapper}>
              <input
                type="text"
                className={styles.input}
                placeholder="**** **** **** 4242"
                value={cardNumber}
                onChange={handleCardNumber}
                maxLength={19}
              />
              <CreditCard size={18} className={styles.inputIcon} />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>EXPIRY DATE</label>
              <input
                type="text"
                className={styles.input}
                placeholder="MM/YY"
                value={expiry}
                onChange={handleExpiry}
                maxLength={5}
              />
            </div>
            <div className={styles.fieldGroup}>
              <label className={styles.label}>CVV</label>
              <input
                type="password"
                className={styles.input}
                placeholder="•••"
                value={cvv}
                onChange={handleCvv}
                maxLength={3}
              />
            </div>
          </div>
        </div>
      )}


      {method === "apple" && (
        <div className={styles.altMethod}>
          <Smartphone size={32} className={styles.altIcon} />
          <p>Use Face ID or Touch ID to complete your payment securely.</p>
        </div>
      )}

  
      {method === "cash" && (
        <div className={styles.altMethod}>
          <Banknote size={32} className={styles.altIcon} />
          <p>Pay with cash upon delivery. Please have the exact amount ready.</p>
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;