interface Props {
  title: string;
  description: string;
  url: string;
}

const SmallCard: React.FC<Props> = ({ title, description, url }) => {
  return (
    <div className="flex items-center justify-between w-full gap-5 p-4 border rounded">
      <div className="max-w-md text-gray-500">
        <h3 className="font-bold text-black">{title}</h3>
        <h5 className="text-sm text-justify">{description}</h5>
      </div>
      <div className="max-w-[60px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="object-cover" src={url} alt="3" />
      </div>
    </div>
  );
};

export default SmallCard;
