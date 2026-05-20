import { useState } from "react";
import styles from "./OrderSummary.module.css";
import { ShieldCheck } from "lucide-react";


const dummyItems = [
  {
    id: 1,
    name: "Truffle Wagyu Burger",
    detail: "Qty: 1 • Medium Rare",
    price: 24.0,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=80&h=80&fit=crop",
  },
  {
    id: 2,
    name: "Truffle Parmesan Fries",
    detail: "Qty: 1 • Extra Crispy",
    price: 12.0,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=80&h=80&fit=crop",
  },
];

const DELIVERY_FEE = 4.5;
const TAX_RATE = 0.086; 
const REWARD_DISCOUNT = 5.0;

const OrderSummary = ({ onPlaceOrder }) => {
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [useRewards, setUseRewards] = useState(false);

  const subtotal = dummyItems.reduce((acc, item) => acc + item.price, 0);
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
        {dummyItems.map((item) => (
          <div key={item.id} className={styles.item}>
            <img src={item.image} alt={item.name} className={styles.itemImg} />
            <div className={styles.itemInfo}>
              <span className={styles.itemName}>{item.name}</span>
              <span className={styles.itemDetail}>{item.detail}</span>
            </div>
            <span className={styles.itemPrice}>${item.price.toFixed(2)}</span>
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
        Place Order →
      </button>


      <div className={styles.secureNote}>
        <ShieldCheck size={14} />
        <span>Secure 256-bit SSL Encrypted Payment</span>
      </div>
    </div>
  );
};

export default OrderSummary;