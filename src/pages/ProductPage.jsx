import { ActionButton } from '../components/ActionButton';
import ShowSomeProduct from '../components/product/ShowSomeProduct';

export default function ProductPage() {
  return (
    <div className="mx-16 my-10">
      <div className="my-10">
        <div className="mx-24 mb-8">Store / Gear / Lryx Watch</div>
        <div className="flex justify-around ">
          <img
            className="h-[450px]"
            src="https://framerusercontent.com/images/ucSTRAtxT2D1lfGCCOuKVNTIslk.png"
            alt=""
          />

          <div className="flex flex-col justify-start gap-24 w-96">
            <div className="flex flex-col gap-8">
              <h1 className="text-5xl ">Lryx Watch</h1>
              <p className="text-xl">
                Elevate your style with the sophisticated Lryx Watch, a perfect
                blend of elegance and functionality
              </p>
            </div>
            <ActionButton title="BUY NOW" style="bg-black text-white" />
          </div>
        </div>
      </div>
      <ShowSomeProduct title="Related Products" />
    </div>
  );
}
