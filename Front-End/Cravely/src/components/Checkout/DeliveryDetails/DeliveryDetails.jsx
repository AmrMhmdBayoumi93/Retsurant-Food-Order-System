import { useState } from "react";
import styles from "./DeliveryDetails.module.css";
import { MapPin } from "lucide-react";

const DeliveryDetails = ({ onDetailsChange }) => {
  const [mode, setMode] = useState("delivery"); 
  const [address, setAddress] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleModeChange = (newMode) => {
    setMode(newMode);
    onDetailsChange?.({ mode: newMode, address, instructions });
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
    onDetailsChange?.({ mode, address: e.target.value, instructions });
  };

  const handleInstructionsChange = (e) => {
    setInstructions(e.target.value);
    onDetailsChange?.({ mode, address, instructions: e.target.value });
  };

  return (
    <div className={styles.container}>
   
      <div className={styles.header}>
        <h2 className={styles.title}>Delivery Details</h2>
        <div className={styles.toggle}>
          <button
            className={`${styles.toggleBtn} ${mode === "delivery" ? styles.active : ""}`}
            onClick={() => handleModeChange("delivery")}
          >
            Delivery
          </button>
          <button
            className={`${styles.toggleBtn} ${mode === "pickup" ? styles.active : ""}`}
            onClick={() => handleModeChange("pickup")}
          >
            Pickup
          </button>
        </div>
      </div>

      
      {mode === "delivery" && (
        <div className={styles.fields}>
          <div className={styles.fieldGroup}>
            <label className={styles.label}>DELIVERY ADDRESS</label>
            <div className={styles.inputWrapper}>
              <MapPin className={styles.icon} size={16} />
              <input
                type="text"
                className={styles.input}
                placeholder="221B Baker Street, London, NW1 6XE"
                value={address}
                onChange={handleAddressChange}
              />
            </div>
          </div>

          <div className={styles.fieldGroup}>
            <label className={styles.label}>DELIVERY INSTRUCTIONS</label>
            <textarea
              className={styles.textarea}
              placeholder="Gate code, drop-off preferences, etc..."
              value={instructions}
              onChange={handleInstructionsChange}
              rows={4}
            />
          </div>
        </div>
      )}

     
      {mode === "pickup" && (
        <div className={styles.pickupMsg}>
          <MapPin size={20} className={styles.pickupIcon} />
          <p>Your order will be ready for pickup at our nearest branch.</p>
        </div>
      )}
    </div>
  );
};

export default DeliveryDetails;