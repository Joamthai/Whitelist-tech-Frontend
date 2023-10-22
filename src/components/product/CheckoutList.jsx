import { CiSquareMinus, CiSquarePlus, CiTrash } from 'react-icons/ci';
import useProduct from '../../hooks/use-product';
import { useEffect } from 'react';
import { getAccessToken } from '../../utils/local-storage';
import useAuth from '../../hooks/use-auth';

export default function CheckoutList({ product, amount }) {
  const { authUser } = useAuth();
  const {
    deleteFromCart,
    getCartItem,
    isRefresh,
    increaseAmount,
    decreaseAmount,
  } = useProduct();
  useEffect(() => {
    if (getAccessToken()) {
      getCartItem();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRefresh]);
  const handleAmount = product?.stock > amount ? amount : product?.stock;
  return (
    <>
      <div className="flex gap-10 border-b-2 p-4 justify-between">
        <img className="h-40 " src={product?.image} alt="" />
        <div className="flex flex-col  gap-6">
          <h1 className="text-xl">{product?.name}</h1>
          <p className="text-neutral-500">{product?.description}</p>
        </div>
        <div className="flex flex-col justify-between items-end text-lg">
          <p>${handleAmount * product?.price}USD</p>
          <div className="flex justify-between items-center gap-4 text-2xl">
            <CiSquareMinus
              onClick={() =>
                decreaseAmount({
                  amount: amount,
                  product: product,
                  userId: authUser.id,
                })
              }
              className="cursor-pointer"
            />
            <p className="text-xl">{handleAmount}</p>
            <CiSquarePlus
              onClick={() =>
                increaseAmount({
                  amount: amount,
                  product: product,
                  userId: authUser.id,
                })
              }
              className="cursor-pointer"
            />
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
