import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Define the PayPal Script Provider options type
interface PayPalOptions {
  "client-id": string;
  currency: string;
  intent: string;
}

const Checkout: React.FC = () => {
  const initialOptions: PayPalOptions = {
    "client-id": "YOUR_PAYPAL_CLIENT_ID", // Replace with your actual client ID
    currency: "USD", // You can change this based on your store's currency
    intent: "capture", // Usually 'capture' for one-time payments
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            if (!actions.order) {
              throw new Error("Order action not available");
            }
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "100.00", // Replace this with your dynamic total
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            if (!actions.order) {
              throw new Error("Order action not available");
            }
            return actions.order.capture().then((details) => {
              if (details.payer && details.payer.name) {
                alert(`Transaction completed by ${details.payer.name.given_name}`);
              } else {
                alert("Transaction completed.");
              }
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Checkout;
