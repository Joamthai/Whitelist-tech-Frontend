import { AiOutlinePoweroff } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from 'react-icons/fa';

import Menu from './Menu';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-black flex justify-between text-white px-16 py-12">
      <div className="flex flex-col gap-2 w-64">
        <Link to="/" className="flex gap-4 pb-2">
          <AiOutlinePoweroff className="text-4xl " />
          <div className="text-3xl">Whitelist-Tech</div>
        </Link>
        <div className="flex gap-4 text-3xl pb-2">
          <FaTwitter />
          <FaInstagram />
          <FaFacebook />
          <FaLinkedinIn />
        </div>
        <hr />
        <div>
          Selling premium products, designed to elevate your everyday experience
        </div>
      </div>
      <div className="text-lg ">
        <div className="pb-2">Menu</div>
        <Menu />
      </div>
      <div>
        <div className="pb-2">CONTACT US</div>
        <div className="flex items-center gap-3 pb-2">
          <MdEmail className="text-4xl" />
          <div>
            Email
            <br />
            contact@email.com
          </div>
        </div>
        <div className="flex items-center gap-3">
          <FaPhoneAlt className="text-4xl" />
          <div>
            Phone
            <br />
            099-9999999
          </div>
        </div>
      </div>
    </footer>
  );
}
