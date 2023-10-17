import { useState } from 'react';
import { BsThreeDots } from 'react-icons/bs';

export default function EditDropDown({ product, deleteProduct, onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickDelete = () => deleteProduct(product.id);
  return (
    <>
      <div>
        <BsThreeDots onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="h-26 w-20 absolute bg-neutral-100 opacity-80 top-5 -right-8 translate-y-2 border rounded-md shadow-lg text-lg  text-neutral-500 cursor-pointer p-2">
            <div
              className=" hover:bg-neutral-300 rounded-md px-2"
              onClick={onClick}
            >
              Edit
            </div>
            <div
              className=" hover:bg-neutral-300 rounded-md px-2"
              onClick={handleClickDelete}
            >
              Delete
            </div>
          </div>
        )}
      </div>
    </>
  );
}
