import { useState } from "react";
import styles from "./OrderSummary.module.css";
import { ShieldCheck } from "lucide-react";
import { useCart } from "../../../context/CartContext";

const DELIVERY_FEE = 4.5;
const TAX_RATE = 0.086;
const REWARD_DISCOUNT = 5.0;

const OrderSummary = ({ onPlaceOrder }) => {
  const { cartItems, subtotal } = useCart();
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [useRewards, setUseRewards] = useState(false);

  const rewardDiscount = useRewards ? REWARD_DISCOUNT : 0;
  const tax = (subtotal - rewardDiscount) * TAX_RATE;
  const total = subtotal + DELIVERY_FEE + tax - rewardDiscount;

  const handleApplyPromo = () => {
    if (promoCode.trim()) setPromoApplied(true);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Order Summary</h2>

      {/* Items */}
      <div className={styles.items}>
        {cartItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.name} className={styles.itemImg} />
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemDetail}>Qty: {item.quantity}</span>
            </div>
            <span className={styles.itemPrice}>${(item.price * item.quantity).toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className={styles.divider} />

      <div className={styles.promoRow}>
        <input
          type="text"
          className={styles.promoInput}
          placeholder="Promo Code"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
        />
        <button className={styles.promoBtn} onClick={handleApplyPromo}>
          {promoApplied ? "Applied ✓" : "Apply"}
        </button>
      </div>

      <button
        className={`${styles.rewardRow} ${useRewards ? styles.rewardActive : ""}`}
        onClick={() => setUseRewards(!useRewards)}
      >
        <span className={styles.rewardDot} />
        Use 500 Reward Points
        <span className={styles.rewardValue}>-$5.00</span>
      </button>

      <div className={styles.divider} />

      <div className={styles.breakdown}>
        <div className={styles.breakdownRow}>
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Delivery Fee</span>
          <span>${DELIVERY_FEE.toFixed(2)}</span>
        </div>
        <div className={styles.breakdownRow}>
          <span>Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        {useRewards && (
          <div className={`${styles.breakdownRow} ${styles.discount}`}>
            <span>Reward Discount</span>
            <span>-${rewardDiscount.toFixed(2)}</span>
          </div>
        )}
      </div>

      <div className={styles.divider} />

      <div className={styles.totalRow}>
        <span className={styles.totalLabel}>Total</span>
        <span className={styles.totalValue}>${total.toFixed(2)}</span>
      </div>

      <button className={styles.placeOrderBtn} onClick={onPlaceOrder}>
        PLACE ORDER →
      </button>

      <div className={styles.secureNote}>
        <ShieldCheck size={14} />
        <span>Secure 256-bit SSL Encrypted Payment</span>
      </div>
    </div>
  );
};

export default OrderSummary;