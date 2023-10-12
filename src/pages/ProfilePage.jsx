import Address from '../components/profile/Address';
import ProfileForm from '../components/profile/ProfileForm';

export default function ProfilePage() {
  return (
    <div className="px-56 py-[95px]">
      <div className="flex justify-center items-start py-9 border rounded-xl shadow-lg">
        <ProfileForm />
        <Address />
      </div>
    </div>
  );
}
