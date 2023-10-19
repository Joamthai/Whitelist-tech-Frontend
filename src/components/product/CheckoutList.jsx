import { CiSquareMinus, CiSquarePlus, CiTrash } from 'react-icons/ci';
import useProduct from '../../hooks/use-product';
import { useEffect } from 'react';
import { getAccessToken } from '../../utils/local-storage';

export default function CheckoutList({ product, amount }) {
  const { deleteFromCart, getCartItem, cartItem } = useProduct();
  useEffect(() => {
    if (getAccessToken()) {
      getCartItem();
    }
  }, [cartItem]);
  return (
    <>
      <div className="flex gap-10 border-b-2 p-4">
        <img className="h-40 " src={product?.image} alt="" />
        <div className="flex flex-col  gap-6">
          <h1 className="text-xl">{product?.name}</h1>
          <p className="text-neutral-500 w-96">{product?.description}</p>
        </div>
        <div className="flex flex-col justify-between items-end text-lg">
          <p>${amount * product?.price}USD</p>
          <div className="flex justify-between items-center gap-4 text-2xl">
            <CiSquareMinus className="cursor-pointer" />
            <p className="text-xl">{amount}</p>
            <CiSquarePlus className="cursor-pointer" />
          </div>
          <CiTrash
            className="text-2xl cursor-pointer"
            onClick={() => deleteFromCart(product?.id)}
          />
        </div>
      </div>
    </>
  );
}
