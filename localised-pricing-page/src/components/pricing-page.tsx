import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getSymbolFromCurrency from "currency-symbol-map";

interface PricingPageProps {
  currency: string;
  basicPrice: number;
  proPrice: number;
  enterprisePrice: number;
}

export default function PricingPage({
  currency,
  basicPrice,
  proPrice,
  enterprisePrice,
}: PricingPageProps) {
  const formatPrice = (price: string) => {
    const symbol = getSymbolFromCurrency(currency);
    return `${symbol}${price}`;
  };

  return (
    <div className="container px-4 py-16 mx-auto md:py-24">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Simple, Transparent Pricing
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Choose the perfect plan for your needs. Always know what you&apos;ll
          pay.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {/* Basic Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Basic</CardTitle>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl font-bold">
                {formatPrice(basicPrice)}
              </span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-3">
              Perfect for individuals just getting started.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>5 projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Up to 10,000 subscribers</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Basic analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>48-hour support response time</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Get Started
            </Button>
          </CardFooter>
        </Card>

        {/* Pro Plan (Most Popular) */}
        <Card className="flex flex-col relative border-primary shadow-md">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            Most Popular
          </div>
          <CardHeader>
            <CardTitle className="text-xl">Pro</CardTitle>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl font-bold">
                {formatPrice(proPrice)}
              </span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-3">
              Ideal for growing businesses and teams.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>25 projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Up to 50,000 subscribers</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Advanced analytics</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>24-hour support response time</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Custom integrations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Team collaboration tools</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Get Started</Button>
          </CardFooter>
        </Card>

        {/* Enterprise Plan */}
        <Card className="flex flex-col">
          <CardHeader>
            <CardTitle className="text-xl">Enterprise</CardTitle>
            <div className="flex items-baseline gap-1 mt-2">
              <span className="text-3xl font-bold">
                {formatPrice(enterprisePrice)}
              </span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <CardDescription className="mt-3">
              For large organizations with advanced needs.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Unlimited projects</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Unlimited subscribers</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Premium analytics with custom reports</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>4-hour support response time</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Dedicated account manager</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>Custom development</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-500" />
                <span>SLA and priority support</span>
              </li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              Contact Sales
            </Button>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <p className="text-muted-foreground">
          All plans include a 14-day free trial. No credit card required.
        </p>
        <p className="mt-2 text-muted-foreground">
          Need a custom solution?{" "}
          <a href="#" className="font-medium underline">
            Contact our sales team
          </a>
          .
        </p>
      </div>
    </div>
  );
}
