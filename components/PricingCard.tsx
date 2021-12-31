interface Props {
  url: string;
  title: string;
  description: string;
  price: string;
  price_desc: string;
  btn_text: string;
  disabled: boolean;
  feature_title?: string;
  features: string[];
}

const PricingCard: React.FC<Props> = ({
  url,
  title,
  description,
  price,
  price_desc,
  btn_text,
  disabled,
  feature_title,
  features,
}) => {
  return (
    <div className="border rounded bg-primary-500">
      <div className="p-4 bg-white">
        <div className="max-w-[55px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={url} alt="personal" />
        </div>
        <h3 className="mt-3 font-bold text-black">{title}</h3>
        <h5 className="text-sm">{description}</h5>
      </div>
      <div className="p-4">
        <h3 className="font-medium">{price}</h3>
        <h5 className="text-xs text-gray-500">{price_desc}</h5>
        <button
          type="button"
          disabled={disabled}
          className="w-full py-2 my-4 text-sm text-white rounded-sm shadow-md disabled:bg-opacity-50 hover:bg-primary-400 bg-primary-300"
        >
          {btn_text}
        </button>
        <div>
          <h5 className="mb-2 text-[0.85rem] font-medium">{feature_title}</h5>
        </div>
        {features?.map((feature) => (
          <div key={feature} className="text-sm text-gray-600">
            &#10003; {feature}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingCard;
