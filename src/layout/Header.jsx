import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlinePoweroff } from 'react-icons/ai';
import { FaCartShopping } from 'react-icons/fa6';

import Menu from './Menu';
import Modal from '../components/Modal';
import SignUpForm from '../components/auth/SignUpForm';
import LoginForm from '../components/auth/LoginForm';
import useAuth from '../hooks/use-auth';
import DropDown from '../components/DropDown';
import useProduct from '../hooks/use-product';

export default function Header() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  const { authUser } = useAuth();
  const { cartItem } = useProduct();

  return (
    <>
      <header className="flex justify-between px-10 border bg-white h-20">
        <Link to="/" className="flex items-center gap-6 ">
          <AiOutlinePoweroff className="text-6xl " />
          <div className="text-4xl font-semibold">Whitelist-Tech</div>
        </Link>
        <div className="flex items-center gap-8 text-lg text-neutral-500 ">
          <Menu />
        </div>
        <div className="flex justify-between items-center gap-4">
          <input
            type="text"
            placeholder="Search for..."
            className="border  border-neutral-400 rounded-full px-4 py-1 bg-neutral-100"
          />
          <Link to="/cart" className="relative">
            <div className="absolute -top-3 -right-2 flex justify-center items-center bg-black text-white text-xs border border-neutral-500 rounded-full px-1 ">
              {cartItem?.length || 0}
            </div>
            <FaCartShopping className="text-2xl text-neutral-400" />
          </Link>
          {authUser ? (
            <>
              <DropDown />
            </>
          ) : (
            <>
              <button
                className="bg-neutral-100 border  border-neutral-400 rounded-full px-4 py-1.5 text-lg text-neutral-500"
                onClick={() => setShowLoginModal(true)}
              >
                Login
              </button>

              <button
                className="bg-neutral-100 border border-neutral-400 rounded-full px-4 py-1.5 text-lg text-neutral-500"
                onClick={() => setShowSignUpModal(true)}
              >
                Sign up
              </button>
            </>
          )}
        </div>
      </header>
      <Modal
        isVisible={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      >
        <LoginForm
          onCloseModal={() => {
            setShowLoginModal(false);
          }}
        />
      </Modal>
      <Modal
        isVisible={showSignUpModal}
        onClose={() => setShowSignUpModal(false)}
      >
        <SignUpForm
          onCloseModal={() => {
            setShowSignUpModal(false);
          }}
        />
      </Modal>
    </>
  );
}
