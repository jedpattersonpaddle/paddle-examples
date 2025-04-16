import PricingPage from "@/components/pricing-page";
import { headers } from "next/headers";
import { getPrices } from "@/lib/get-prices";

export default async function HomePage() {
  const headersList = await headers();

  const ipAddress = headersList.get("x-forwarded-for");

  const { currency, basic, pro, enterprise } = await getPrices(ipAddress);

  return (
    <PricingPage
      currency={currency}
      basicPrice={basic}
      proPrice={pro}
      enterprisePrice={enterprise}
    />
  );
}
