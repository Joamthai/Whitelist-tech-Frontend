export default function Input({ type = 'text', placeholder }) {
  return (
    <div>
      <div>{placeholder} :</div>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-neutral-400 rounded-xl px-4 py-1 w-96 bg-neutral-100"
      />
    </div>
  );
}
