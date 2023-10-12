export default function Input({ type = 'text', style = '', name, inputTitle }) {
  return (
    <div className={`${style}`}>
      <h1>{inputTitle} :</h1>
      <input
        type={type}
        name={name}
        className={`border w-full border-neutral-400 rounded-xl px-4 py-1 bg-neutral-100 `}
      />
    </div>
  );
}
