import { paddle } from "./paddle";

const basicPriceId = "";
const proPriceId = "";
const enterprisePriceId = "";

export const getPrices = async (customer_ip_address: string | null) => {
  const previewPrices = await paddle.pricingPreview.preview({
    customerIpAddress: customer_ip_address,
    items: [
      {
        priceId: basicPriceId,
        quantity: 1,
      },
      {
        priceId: proPriceId,
        quantity: 1,
      },
      {
        priceId: enterprisePriceId,
        quantity: 1,
      },
    ],
  });

  const currency = previewPrices.currencyCode;

  const basicPriceItem = previewPrices.details.lineItems.find(
    (item) => item.price.id === basicPriceId,
  );

  const proPriceItem = previewPrices.details.lineItems.find(
    (item) => item.price.id === proPriceId,
  );

  const enterprisePriceItem = previewPrices.details.lineItems.find(
    (item) => item.price.id === enterprisePriceId,
  );

  const basicPrice = Number(basicPriceItem?.totals.total) / 100;
  const proPrice = Number(proPriceItem?.totals.total) / 100;
  const enterprisePrice = Number(enterprisePriceItem?.totals.total) / 100;

  return {
    currency,
    basic: basicPrice,
    pro: proPrice,
    enterprise: enterprisePrice,
  };
};
