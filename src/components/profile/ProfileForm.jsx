import Input from './Input';
import useAuth from '../../hooks/use-auth';
import UserInfo from './UserInfo';

export default function ProfileForm() {
  const { authUser } = useAuth();
  return (
    <form className="flex flex-1 flex-col gap-4 w-96 px-10 border-r-2">
      <h1 className="text-2xl">Personal details</h1>
      {authUser ? (
        <>
          <div className="flex gap-2">
            <UserInfo col="flex-1" name="firstName" inputTitle="First Name" />
            <UserInfo col="flex-1" name="lastName" inputTitle="Last Name" />
          </div>
          <UserInfo name="email" inputTitle="Email" />
          <UserInfo name="mobile" inputTitle="Mobile" />
          <UserInfo inputTitle="Password" />
        </>
      ) : (
        <>
          <div className="flex gap-2">
            <Input col="flex-1" name="firstName" inputTitle="First Name" />
            <Input col="flex-1" name="lastName" inputTitle="Last Name" />
          </div>
          <Input name="email" inputTitle="Email" />
          <Input name="mobile" inputTitle="Mobile" />
          <Input inputTitle="Password" />
        </>
      )}
    </form>
  );
}
