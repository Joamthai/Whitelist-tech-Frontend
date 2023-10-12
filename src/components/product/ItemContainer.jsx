export default function ItemContainer({
  src,
  name,
  description,
  category,
  price,
}) {
  return (
    <div className="relative w-[290px] h-[510px] flex flex-col justify-start gap-4">
      <div className="absolute top-6 left-6 max-w-fit max-h-fit bg-white rounded-full px-4 py-1 text-lg shadow-xl">
        {category}
      </div>
      <img
        src={src}
        alt={name}
        className="h-auto max-w-sm rounded-[56px] shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
      />
      <div className="flex flex-col justify-between">
        <h1 className="text-2xl mb-4">{name}</h1>
        <p className="text-lg text-neutral-500">{description}</p>
        <p className="text-xl hover:underline">${price} USD</p>
      </div>
    </div>
  );
}
