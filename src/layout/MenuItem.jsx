import { Link } from 'react-router-dom';

export default function MenuItem({ to, text }) {
  return (
    <Link to={to}>
      <div>{text}</div>
    </Link>
  );
}
