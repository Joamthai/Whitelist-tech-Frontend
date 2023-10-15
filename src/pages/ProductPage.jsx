import { CiSquareMinus, CiSquarePlus } from 'react-icons/ci';
import { useState } from 'react';

import ShowSomeProduct from '../components/product/ShowSomeProduct';

export default function ProductPage() {
  const min = 1;
  const max = 10;
  const [count, setCount] = useState(1);

  function handleIncrement() {
    if (count < max) {
      setCount(count + 1);
    }
  }
  function handleDecrement() {
    if (count > min) {
      setCount(count - 1);
    }
  }

  function handleClick(e) {
    console.log(e);
  }

  return (
    <div className="mx-16 my-10">
      <div className="my-10">
        <div className="mx-24 mb-8">Store / Gear / Lryx Watch</div>
        <div className="flex justify-center gap-40 ">
          <img
            className="h-[450px]"
            src="https://framerusercontent.com/images/ucSTRAtxT2D1lfGCCOuKVNTIslk.png"
            alt=""
          />

          <div className="flex flex-col justify-start gap-10 w-96">
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl ">Lryx Watch</h1>
              <p className="text-xl">
                Elevate your style with the sophisticated Lryx Watch, a perfect
                blend of elegance and functionality
              </p>
            </div>
            <div className="flex items-center gap-4">
              <CiSquareMinus className="text-4xl" onClick={handleDecrement} />
              <p className="text-2xl" onChange={handleClick}>
                {count}
              </p>
              <CiSquarePlus className="text-4xl" onClick={handleIncrement} />
            </div>
            <div className="flex flex-col gap-4">
              <button className="bg-black text-xl font-medium text-white border border-black rounded-full hover:shadow-md max-h-fit py-2">
                Buy now
              </button>
              <button className="bg-white text-xl font-medium text-black border-[1.5px] border-black rounded-full hover:shadow-md max-h-fit py-2">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <ShowSomeProduct title="Related Products" />
    </div>
  );
}
