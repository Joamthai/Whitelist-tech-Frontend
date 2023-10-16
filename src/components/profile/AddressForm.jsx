import { useState } from 'react';
import Input from './Input';

export default function AddressForm({
  onCloseModal,
  createAddress,
  updateAddress,
  address,
}) {
  const [input, setInput] = useState({
    title: address?.title ? address?.title : '',
    address: address?.address ? address?.address : '',
    subDistrict: address?.subDistrict ? address?.subDistrict : '',
    district: address?.district ? address?.district : '',
    province: address?.province ? address?.province : '',
    country: address?.country ? address?.country : '',
    postalCode: address?.postalCode ? address?.postalCode : '',
  });
  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmitForm = async (e) => {
    try {
      e.preventDefault();
      if (address) {
        const newAddress = { ...address, ...input };
        delete newAddress.userId;
        updateAddress(newAddress);
      } else {
        createAddress(input);
      }
      onCloseModal();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="flex flex-col w-96 gap-2" onSubmit={handleSubmitForm}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="text-xl hover:bg-neutral-100 rounded-md outline-none w-1/2 p-1"
        onChange={handleChangeInput}
        value={input?.title}
      />
      <div className="flex flex-1 gap-2">
        <Input
          name="address"
          inputTitle="Address"
          onChange={handleChangeInput}
          value={input.address}
        />
        <Input
          name="subDistrict"
          inputTitle="Subdistrict"
          onChange={handleChangeInput}
          value={input.subDistrict}
        />
      </div>
      <div className="flex gap-2">
        <Input
          name="district"
          inputTitle="District"
          onChange={handleChangeInput}
          value={input.district}
        />
        <Input
          name="province"
          inputTitle="Province"
          onChange={handleChangeInput}
          value={input.province}
        />
      </div>
      <div className="flex gap-2">
        <Input
          name="country"
          inputTitle="Country"
          onChange={handleChangeInput}
          value={input.country}
        />
        <Input
          name="postalCode"
          inputTitle="Postal Code"
          onChange={handleChangeInput}
          value={input.postalCode}
        />
      </div>
      <button className="w-96 h-10 rounded-full bg-black text-white text-lg mt-4">
        Add
      </button>
    </form>
  );
}
