import useAuth from '../../hooks/use-auth';
import { getAccessToken } from '../../utils/local-storage';
import EditDropDown from './EditDropDown';

export default function ItemContainer({
  src,
  name,
  description,
  category,
  price,
  stock,
  // productObj,
  deleteProduct,
}) {
  const { authUser } = useAuth();
  return (
    <div className="relative w-[290px] h-[500px] flex flex-col justify-start gap-4 pb-4 transform transition-all hover:-translate-y-2 duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 rounded-[56px] p-4">
      <div className="absolute top-8 left-8 max-w-fit max-h-fit bg-white rounded-full px-4 py-1 text-lg shadow-xl">
        {category}
      </div>
      <div className="absolute top-8 right-8 max-w-fit max-h-fit bg-white rounded-full px-4 py-1 text-lg shadow-xl">
        {!getAccessToken() || authUser.role === 'USER' ? null : (
          <EditDropDown deleteProduct={deleteProduct} />
        )}
      </div>
      <img src={src} alt={name} />
      <div className="flex flex-col flex-1 justify-between px-1">
        <div>
          <h1 className="text-[20px] mb-1">{name}</h1>
          <p className="text-sm text-neutral-500 break-words">{description}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-xl mb-6">${price} USD</p>
          <p>in stock: {stock}</p>
        </div>
      </div>
    </div>
  );
}
