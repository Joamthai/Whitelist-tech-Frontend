import Input from './Input';

export default function LoginForm() {
  return (
    <>
      <h1 className="text-3xl font-semibold">Login</h1>
      <form className="flex flex-col justify-center items-start gap-4">
        <Input type="text" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <button className="w-96 h-10 rounded-full bg-black text-white text-lg mt-4">
          Login
        </button>
      </form>
    </>
  );
}
