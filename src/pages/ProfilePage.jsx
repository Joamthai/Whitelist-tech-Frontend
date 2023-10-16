import axios from '../config/axios';
import Address from '../components/profile/Address';
import ProfileForm from '../components/profile/ProfileForm';
import { useEffect, useState } from 'react';

export default function ProfilePage() {
  const [allAddress, setAllAddress] = useState([]);

  const createAddress = async (data) => {
    const res = await axios.post('/profile/address', data);
    const newAddress = res.data.address;
    setAllAddress([newAddress, ...allAddress]);
  };

  const updateAddress = async (data) => {
    const res = await axios.patch('/profile/address', data);
    const indexAddress = allAddress.findIndex((el) => el.id === data.id);
    const newAllAddress = [...allAddress];
    const updatedAddress = res.data.address;
    newAllAddress.splice(indexAddress, 1, updatedAddress);
    setAllAddress(newAllAddress);
  };

  const deleteAddress = async (addressId) => {
    try {
      await axios.delete(`/profile/address/${addressId}`);
      setAllAddress(allAddress.filter((address) => address.id !== addressId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios.get('/profile/address').then((res) => {
      setAllAddress(res.data.addresses);
    });
  }, []);

  return (
    <div className="mx-16 my-12 px-40 min-h-[483px] ">
      <div className="flex justify-center items-start py-9 border rounded-xl shadow-lg">
        <ProfileForm />
        <Address
          allAddress={allAddress}
          createAddress={createAddress}
          updateAddress={updateAddress}
          deleteAddress={deleteAddress}
        />
      </div>
    </div>
  );
}
