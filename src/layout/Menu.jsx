import MenuItem from './MenuItem';

export default function Menu() {
  const menuLists = [
    { id: 1, to: '/store', text: 'Store' },
    { id: 2, to: '/about', text: 'About' },
    { id: 3, to: '/', text: 'Support' },
    { id: 4, to: '/', text: 'Contact' },
  ];

  return (
    <>
      {menuLists.map((el) => (
        <MenuItem key={el.id} to={el.to} text={el.text} />
      ))}
    </>
  );
}
