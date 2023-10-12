import Input from './Input';

export default function AddressForm({ onCloseModal }) {
  return (
    <form className="flex flex-col w-96 gap-2">
      <input
        type="text"
        placeholder="Title"
        className="text-xl hover:bg-neutral-100 rounded-md outline-none w-1/2 p-1"
      />
      <div className="flex flex-1 gap-2">
        <Input name="address" inputTitle="Address" />
        <Input name="SubDistrict" inputTitle="Subdistrict" />
      </div>
      <div className="flex gap-2">
        <Input name="district" inputTitle="District" />
        <Input name="province" inputTitle="Province" />
      </div>
      <div className="flex gap-2">
        <Input name="country" inputTitle="Country" />
        <Input name="postalCode" inputTitle="Postal Code" />
      </div>
      <button className="w-96 h-10 rounded-full bg-black text-white text-lg mt-4">
        Add
      </button>
    </form>
  );
}
