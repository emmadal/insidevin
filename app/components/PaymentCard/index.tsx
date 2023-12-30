"use client";
import React, { useState } from "react";
import TextInput from "../TextInput";
import PaymentButton from "../PaymentButton";
import PaystackPop from "@paystack/inline-js";
import { saveData } from "@/app/action";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";

interface PaymentProps {
  saleHistoryID: string;
  vin: string;
}
const PaymentCard = ({ vin, saleHistoryID }: PaymentProps) => {
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const { data } = useSession();

  const handlePayment = (e: any) => {
    e.preventDefault();
    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: process.env.NEXT_PUBLIC_PAYSTACK_KEY,
      email,
      amount: 15.99 * 100,
      onSuccess: async (response: any) => {
        if (response?.status === "success") {
          await saveData("payment", {
            user_email: data?.user?.email,
            vin,
            id: uuidv4(),
            saleHistoryID,
            amount: 15.99,
            currency: "GHS",
            user_to_send: email,
            user_id: data?.user?.id,
            ...response,
          });
          setChecked(false);
          setEmail("");
        }
      },
      onCancel: () => {},
    });
  };
  return (
    <form onSubmit={handlePayment}>
      <TextInput
        name="email"
        label="Email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex flex-row items-center space-x-2">
        <TextInput
          type="checkbox"
          name="checked"
          required
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="checked:accent-green-250 h-4 w-4 rounded-full"
        />
        <span className="font-normal text-base">
          Sign up for the newsletter
        </span>
      </div>
      <PaymentButton label="Order Report Now" />
    </form>
  );
};

export default PaymentCard;
