import PriceModel from "@/models/PriceModel";

interface CardPriceProps {
  variant: 1 | 2;
  interval: "monthly" | "yearly";
  cardPrice: PriceModel;
}
export default function CardPrice({
  variant,
  interval,
  cardPrice,
}: CardPriceProps) {
  return (
    <div
      className={`${
        variant === 1 ? "card-price-white" : "card-price-violet"
      } gap-y-6`}
    >
      <h1 className="text-2xl w-fit leading-none">{cardPrice.name}</h1>
      <p className="flex w-fit items-center gap-x-1">
        <span className="text-[32px]">$</span>
        <span className="text-[56px]">{cardPrice[interval].price}</span>
      </p>

      <div
        className={`flex flex-col w-full text-[14px] divide-y-2 border-y-2 ${
          variant === 1
            ? "divide-veryLightGrayishBlue border-veryLightGrayishBlue"
            : "divide-veryLightGrayishBlue/20 border-veryLightGrayishBlue/20"
        }`}
      >
        {cardPrice[interval].features.map((feature, index) => (
          <p key={index} className="flex w-full justify-center py-4">
            {feature}
          </p>
        ))}
      </div>

      <button className="flex w-full justify-center text-[14px] tracking-[4px] rounded-lg">
        <div className="flex w-full h-full justify-center p-3 rounded-lg">
          <span>LEARN MORE</span>
        </div>
      </button>
    </div>
  );
}
