// Card.tsx

type CardProps = {
  title: string;
  size: string;
  price: string;
  color: string;
  image?: string; // optional prop
};

export default function Card({ title,size,price, color, image }: CardProps) {
  return (
    <div className="max-w-sm rounded-2xl shadow-lg bg-white p-6 m-6">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-80 h-80 object-cover rounded-xl mb-4"
        />
      )}
      <h6 className="text-xl font-semibold text-gray-800">{title}</h6>
      <h6 className="text-xl font-semibold text-gray-800">size : {size}</h6>
      <h6 className="text-gray-600 mt-2">color : {color}</h6>
      <h3 className="text-xl font-semibold text-[var(--clr-primary)]">price : {price}</h3>
    </div>
  );
}
