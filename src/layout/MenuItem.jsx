import { Link } from 'react-router-dom';

export default function MenuItem({ to, text }) {
  return (
    <Link to={to} className="border-none rounded-md p-1 hover:text-black ">
      <div>{text}</div>
    </Link>
  );
}
