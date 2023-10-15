import { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/use-auth';

export default function DropDown() {
  const { authUser, logout } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(false);
  return (
    <div className="relative z-50">
      <span
        className="text-xl  text-neutral-500 cursor-pointer hover:underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {`Hi, ${authUser.firstName}`}
      </span>
      {isOpen && (
        <div className="h-26 w-36 absolute bg-neutral-100 -right-8 translate-y-2 border rounded-md shadow-lg text-lg  text-neutral-500 cursor-pointer p-2">
          <Link to="/profile">
            <div
              className=" hover:bg-neutral-300 rounded-md px-2"
              onClick={handleClick}
            >
              Profile
            </div>
          </Link>
          <Link to="/order">
            <div
              className=" hover:bg-neutral-300 rounded-md px-2"
              onClick={handleClick}
            >
              Order status
            </div>
          </Link>
          <Link>
            <div
              className=" hover:bg-neutral-300 rounded-md px-2"
              onClick={logout}
            >
              Log out
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}
