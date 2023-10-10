import Input from './Input';

export default function SignUpForm() {
  return (
    <>
      <h1 className="text-3xl font-medium">Create account</h1>
      <form className="flex flex-col justify-center items-start gap-4">
        <Input type="text" placeholder="First name" />
        <Input type="text" placeholder="Last name" />
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm password" />
        <button className="w-96 h-10 rounded-full bg-black text-white text-lg mt-4">
          Sign up
        </button>
      </form>
    </>
  );
}
