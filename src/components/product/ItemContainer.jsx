export default function ItemContainer({ product }) {
  return (
    <div className="relative w-[290px] h-[500px] flex flex-col justify-between gap-4 pb-4 p-4">
      <div className="absolute top-8 left-8 max-w-fit max-h-fit bg-white rounded-full px-4 py-1 text-lg shadow-xl">
        {product?.category?.name}
      </div>

      <img src={product?.image} alt={product?.name} />
      <div className="flex flex-col flex-1 justify-between px-1">
        <div>
          <h1 className="text-[20px] mb-1">{product?.name}</h1>
          <p className="text-sm text-neutral-500 break-words">
            {product?.description}
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl mb-6">${product?.price} USD</p>
          <p>in stock: {product?.stock}</p>
        </div>
      </div>
    </div>
  );
}
