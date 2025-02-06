import Toogle from "@/components/Toogle";
import { useState } from "react";
import Image from "next/image";
import CardPrice from "@/components/CardPrice";

const prices = [
  {
    name: "Basic",
    yearly: {
      price: 199.99,
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
    monthly: {
      price: 19.99,
      features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    },
  },
  {
    name: "Professional",
    yearly: {
      price: 249.99,
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
    monthly: {
      price: 24.99,
      features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    },
  },
  {
    name: "Master",
    yearly: {
      price: 399.99,
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
    monthly: {
      price: 39.99,
      features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    },
  },
];

export default function Home() {
  const [toogle, setToogle] = useState<"monthly" | "yearly">("yearly");

  return (
    <div className="flex flex-col min-h-screen justify-center items-center py-12 px-8">
      <Image
        src={"/images/bg-top.svg"}
        width={400}
        height={400}
        alt=""
        className="fixed top-0 right-0 w-[200px] lg:w-[350px]"
      />
      <Image
        src={"/images/bg-bottom.svg"}
        width={400}
        height={400}
        alt=""
        className="fixed bottom-0 left-0 w-[200px] lg:w-[350px]"
      />

      <div className="flex flex-col w-full justify-center items-center gap-y-12 z-10">
        <h1 className="text-[32px] text-grayishBlue text-center">
          Our Pricing
        </h1>
        <Toogle toogle={toogle} setToogle={setToogle} />
        <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-y-10">
          <CardPrice variant={1} interval={toogle} cardPrice={prices[0]} />
          <CardPrice variant={2} interval={toogle} cardPrice={prices[1]} />
          <CardPrice variant={1} interval={toogle} cardPrice={prices[2]} />
        </div>
      </div>
    </div>
  );
}
