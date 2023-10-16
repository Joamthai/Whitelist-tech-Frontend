import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';

import Modal from '../Modal';
import AddressForm from './AddressForm';
import AddressContainer from './AddressContainer';

export default function Address({
  allAddress,
  createAddress,
  updateAddress,
  deleteAddress,
}) {
  const [showAddressModal, setShowAddressModal] = useState(false);
  return (
    <>
      <div className="flex-1 px-4">
        <div
          className="flex justify-start items-center cursor-pointer hover:bg-neutral-100 max-w-fit px-2 rounded-full gap-2 mb-8"
          onClick={() => setShowAddressModal(true)}
        >
          <AiOutlinePlus className="text-2xl" />
          <h1 className="text-xl cursor-pointer">New address</h1>
        </div>
        {allAddress.map((address) => (
          <AddressContainer
            key={address.id}
            address={address}
            updateAddress={updateAddress}
            deleteAddress={deleteAddress}
          />
        ))}
      </div>
      <Modal
        isVisible={showAddressModal}
        onClose={() => setShowAddressModal(false)}
      >
        <AddressForm
          createAddress={createAddress}
          onCloseModal={() => {
            setShowAddressModal(false);
          }}
        />
      </Modal>
    </>
  );
}
