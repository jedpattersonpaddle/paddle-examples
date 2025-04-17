"use client";
import usePaddle from "@/hooks/usePaddle";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

export default function SuspenseCheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutPage />
    </Suspense>
  );
}

export function CheckoutPage() {
  const searchParams = useSearchParams();
  const paddle = usePaddle();
  const priceId = searchParams.get("priceId");
  const discountCode = searchParams.get("discount");

  useEffect(() => {
    if (!paddle) {
      console.error("Paddle SDK not initialized.");
      return;
    }

    if (!priceId) {
      console.error("No Price ID provided.");
      return;
    }

    paddle.Checkout.open({
      items: [
        {
          priceId: priceId!,
          quantity: 1,
        },
      ],
      discountCode: discountCode,
      settings: {
        displayMode: "overlay",
        variant: "one-page",
      },
    });
  }, [paddle, priceId, discountCode]);

  return <></>;
}
