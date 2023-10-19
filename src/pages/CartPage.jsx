import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import CheckoutForm from '../components/product/CheckoutForm';
import CheckoutList from '../components/product/CheckoutList';
import useAuth from '../hooks/use-auth';
import LoginForm from '../components/auth/LoginForm';
import useProduct from '../hooks/use-product';

export default function CartPage() {
  const { authUser } = useAuth();
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const { cartItem, getCartItem } = useProduct();
  useEffect(() => {
    getCartItem();
  }, [cartItem]);

  return (
    <>
      <div className="flex justify-between gap-16 mx-16 my-20 px-36 min-h-[419px]">
        <div>
          <h1 className="text-4xl mb-8">Cart</h1>
          {cartItem?.map((item) => {
            return (
              <CheckoutList
                key={item.id}
                cartItemId={item.id}
                amount={item.amount}
                product={item.product}
              />
            );
          })}
        </div>
        <div>
          <h1 className="text-4xl mb-8">Summary</h1>
          <div className="flex justify-between mb-2 text-lg">
            <h4>Subtotal</h4>
            <h4>$849.98 USD</h4>
          </div>
          <div className="flex justify-between gap-40 border-b-2 border-black pb-2 mb-10 text-lg">
            <h4>Estimated Delivery & Handling</h4>
            <h4>Free</h4>
          </div>
          <div className="flex justify-between gap-40 border-b-2 border-black pb-2 mb-2 text-lg">
            <h4>Total</h4>
            <h4>$849.98 USD</h4>
          </div>
          <button
            className="bg-black text-xl font-medium text-white border border-black rounded-full hover:shadow-md max-h-fit min-w-full py-2 mt-2"
            onClick={() => setShowCheckoutModal(true)}
          >
            Check out
          </button>
        </div>
      </div>
      {authUser ? (
        <Modal
          isVisible={showCheckoutModal}
          onClose={() => setShowCheckoutModal(false)}
        >
          <CheckoutForm
            onCloseModal={() => {
              setShowCheckoutModal(false);
            }}
          />
        </Modal>
      ) : (
        <Modal
          isVisible={showCheckoutModal}
          onClose={() => setShowCheckoutModal(false)}
        >
          <LoginForm
            onCloseModal={() => {
              setShowCheckoutModal(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}
