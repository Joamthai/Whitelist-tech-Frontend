import { CiSquareMinus, CiSquarePlus, CiTrash } from 'react-icons/ci';

export default function CheckoutList() {
  return (
    <>
      <div className="flex gap-10 border-b-2 p-4">
        <img
          className="h-40 bg-black"
          src="https://framerusercontent.com/images/ucSTRAtxT2D1lfGCCOuKVNTIslk.png"
          alt=""
        />
        <div className="flex flex-col  gap-6">
          <h1 className="text-xl">Lryx Watch</h1>
          <p className="text-neutral-500 w-96">
            Elevate your style with the sophisticated Lryx Watch, a perfect
            Elevate your style with the sophisticated Lryx Watch, a perfect
            Elevate your style with the sophisticated Lryx Watch, a perfect
          </p>
        </div>
        <div className="flex flex-col justify-between items-end text-lg">
          <p>$349.99 USD</p>
          <div className="flex justify-between items-center gap-4 text-2xl">
            <CiSquareMinus />
            <p className="text-xl">1</p>
            <CiSquarePlus />
          </div>
          <CiTrash className="text-2xl" />
        </div>
      </div>
    </>
  );
}
