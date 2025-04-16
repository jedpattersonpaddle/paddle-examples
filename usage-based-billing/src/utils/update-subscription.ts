import { paddle } from "./paddle";

export const updateSubscription = async (subscription_id: string) => {
  try {
    const subscription = await paddle.subscriptions.get(subscription_id);

    await paddle.subscriptions.createOneTimeCharge(subscription_id, {
      effectiveFrom: "next_billing_period",
      items: [
        {
          priceId: "",
          quantity: 1,
        },
      ],
    });

    const updatedSubscription = await paddle.subscriptions.get(
      subscription_id,
      {
        include: ["next_transaction"],
      },
    );

    return updatedSubscription;
  } catch (error) {
    console.error(error);
    return false;
  }
};
