export default function Modal({ isVisible, onClose, children }) {
  if (!isVisible) return null;

  const handleClose = (e) => {
    if (e.target.id === 'wrapper') onClose();
  };
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-25  backdrop-blur-md flex justify-center items-center"
      id="wrapper"
      onClick={handleClose}
    >
      <div className="w-[450px] flex flex-col">
        <button className="text-white text-xl place-self-end" onClick={onClose}>
          X
        </button>
        <div className="flex flex-col justify-center items-start gap-4 bg-white rounded-md p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
