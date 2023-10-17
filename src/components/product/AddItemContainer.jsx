import { BsFillPlusCircleFill } from 'react-icons/bs';
import Modal from '../Modal';
import { useState } from 'react';
import AddProductForm from './AddProductForm';

export default function AddItemContainer() {
  const [showProductModal, setShowProductModal] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowProductModal(true)}
        className="flex flex-col justify-center h-[500px] transform transition-all hover:-translate-y-2 duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30 bg-neutral-100 border-none rounded-[56px]"
      >
        <BsFillPlusCircleFill className="w-[290px] text-9xl text-neutral-300 rounded-full" />
      </div>
      <Modal
        isVisible={showProductModal}
        onClose={() => setShowProductModal(false)}
      >
        <AddProductForm onClose={() => setShowProductModal(false)} />
      </Modal>
    </>
  );
}
