import { BsArrowRight } from 'react-icons/bs';

export function ActionButton({ title, style = ' ', py = 'py-3' }) {
  return (
    <button
      className={`max-w-fit max-h-fit px-4 ${py} rounded-full text-lg m-4 hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300 ease-in-out ${style} `}
    >
      {title}
    </button>
  );
}

export function ArrowButton({ title = 'Explore category' }) {
  return (
    <button className="flex text-xl items-end gap-2 hover:underline">
      <p>{title}</p>
      <BsArrowRight />
    </button>
  );
}

export function CategoryButton({ title }) {
  return (
    <button className=" max-w-fit max-h-fit px-4 py-1 rounded-full text-lg  hover:shadow-lg hover:shadow-black/30 transition-shadow duration-300 ease-in-out ${style}">
      {title}
    </button>
  );
}
