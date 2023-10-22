import ShowSomeProduct from '../components/product/ShowSomeProduct';
import { ActionButton, ArrowButton } from '../components/ActionButton';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="mx-16">
      <div className=" flex flex-col justify-center items-center h-[800px] gap-2 z-10">
        <img
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697127392/gwI54viPFVYGDdbTWc3aT9erBA_faxp3d.webp"
          className="absolute top-24 right-0 h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          alt=""
        />
        <h1 className="text-center text-6xl m-4 z-30">
          High-quality tech gadgets <br /> & accessories
        </h1>
        <p className="text-xl text-center text-neutral-500">
          Shop our curated selection of premium products,
          <br /> designed to elevate your everyday experiences
        </p>
        <div className="flex gap-8 m-4">
          <Link to="/store">
            <ActionButton title="Browse products" style="bg-black text-white" />
          </Link>
          <Link to="/about">
            <ActionButton
              title="About us"
              style="bg-white text-black border-2 border-black"
            />
          </Link>
        </div>
        <img
          className="absolute left-0 bottom-7  h-auto max-w-sm rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697124361/mainpage1_vx4vcj.jpg"
          alt=""
        />
      </div>

      <div className="flex flex-col justify-center items-center gap-20 my-28">
        <div className="flex gap-10">
          <div className="w-[815px] h-[390px] p-16 border rounded-[56px] flex flex-col items-start gap-9 bg-neutral-100">
            <div>
              <h1 className="text-4xl mb-4">Technology</h1>
              <p className="text-lg text-neutral-500">
                Explore the Latest Innovations and Unleash the Power of
                Technology
              </p>
            </div>
            <ArrowButton />
          </div>
          <div className="w-[465px] h-[390px] p-16 border rounded-[56px] flex flex-col items-start gap-9 bg-neutral-100">
            <div>
              <h1 className="text-4xl mb-4">Gear</h1>
              <p className="text-lg text-neutral-500">
                Equip Yourself with Top-Notch Gear for Every Adventure
              </p>
            </div>
            <ArrowButton />
          </div>
        </div>
        <div className="flex gap-10">
          <div className="w-[465px] h-[390px] p-16 border rounded-[56px] flex flex-col items-start gap-9 bg-neutral-100">
            <div>
              <h1 className="text-4xl mb-4">Technology</h1>
              <p className="text-lg text-neutral-500">
                Explore the Latest Innovations and Unleash the Power of
                Technology
              </p>
            </div>
            <ArrowButton />
          </div>
          <div className="w-[815px] h-[390px] p-16 border rounded-[56px] flex flex-col items-start gap-9 bg-neutral-100">
            <div>
              <h1 className="text-4xl mb-4">Accessory</h1>
              <p className="text-lg text-neutral-500">
                Find the Perfect Finishing Touch with Stylish and Functional
                Accessories
              </p>
            </div>
            <ArrowButton />
          </div>
        </div>
      </div>

      <ShowSomeProduct title="Bestsellers" />

      <div className="flex justify-center items-center gap-4 my-20">
        <img
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134881/project/holding_laptop_em65hv.png"
          alt="holding_laptop"
        />
        <div className="w-[495px] h-[650px] flex flex-col justify-center items-start gap-12 bg-neutral-100 border rounded-[56px] p-12 ">
          <h1 className="text-5xl">Premium Design and Quality</h1>
          <p className="text-xl text-neutral-500">
            Born out of a shared love of good design & quality products, we
            create considered solutions fit for the modern lifestyle. Always
            driven by passion, we work to empower others to live the same way.
          </p>
          <Link to="/store">
            <ActionButton title="Browse products" style="bg-black text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
}
