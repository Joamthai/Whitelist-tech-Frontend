import { MdGppGood, MdOutlineDesignServices } from 'react-icons/md';
import { ActionButton } from '../components/ActionButton';
import { PiCompassToolFill, PiHandHeartBold } from 'react-icons/pi';
import { RiTeamFill, RiUserHeartFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <>
      <div className="mx-16 my-16">
        <div className="flex flex-col justify-center items-center px-56 mb-6">
          <h1 className="text-5xl mb-4">About our products</h1>
          <p className="text-neutral-500 text-center">
            We are a passionate team dedicated to delivering exceptional
            products and experiences to our valued customers. With a commitment
            to quality and innovation, we handpick each item in our collection
            to ensure it meets our stringent standards.
          </p>
        </div>
        <div className="flex justify-center gap-9 h-[600px] ">
          <div className="flex flex-col justify-end gap-8">
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697736285/project/iWatch_SE_3_wgtund.png"
              alt="iWatch_SE_3"
            />
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697736285/project/Speaker_vswiis.png"
              alt="Speaker"
            />
          </div>
          <div className="flex flex-col justify-start gap-8">
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697208492/project/Headphone_21-Bass_defj8d.png"
              alt="Headphone_21-Bass"
            />
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697736285/project/iPhone_Case_knud6z.png"
              alt="iPhone_Case"
            />
          </div>
          <div className="flex flex-col justify-end gap-8">
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697736285/project/MX_Master_3_mhqwu9.png"
              alt="MX_Master_3"
            />
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697131914/project/Lryx-Watch_hkkuqt.png"
              alt="Lryx-Watch"
            />
          </div>
          <div className="flex flex-col justify-start gap-8">
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134227/project/Phone_Charger_Port_ojsq3a.png"
              alt="Phone_Charger_Port"
            />
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134228/project/Premium_Earbuds_kuv6d3.png"
              alt="Premium_Earbuds"
            />
          </div>
          <div className="flex flex-col justify-end gap-8">
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134227/project/VR_Headset_mpnhpj.png"
              alt="VR_Headset"
            />
            <img
              className="h-60"
              src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697736285/project/Purifier_mqrlcg.png"
              alt="Purifier"
            />
          </div>
        </div>
        <div className="flex justify-around items-center my-20">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center">2023</h1>
            <p>Year founded</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center">+50</h1>
            <p>Collections</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center">70</h1>
            <p>Happy Customers</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center">+250</h1>
            <p>Products</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl text-center">+25</h1>
            <p>Team members</p>
          </div>
        </div>
        <div className="flex justify-between rounded-[56px]  bg-black">
          <div className="flex flex-col justify-center gap-10 bg-black rounded-[56px] m-10 ">
            <h1 className="text-4xl text-white">The new Special Experience</h1>
            <p className="text-neutral-400">
              Ignite Your Imagination and Redefine Reality through the
              Cutting-Edge Spacial Experience
            </p>
            <Link to="/store">
              <ActionButton
                title="Browse products"
                style="text-black bg-white"
              />
            </Link>
          </div>
          <img
            src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697738516/project/Rectangle_1_m6fprs.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-center items-center my-20">
          <div className="flex flex-col justify-center items-center px-56 mb-6">
            <h1 className="text-4xl mb-4">Our Values</h1>
            <p className="text-neutral-500 text-center">
              We value innovation and continuously seek to push boundaries,
              delivering products that inspire and delight. Join us in embracing
              these values and become part of our mission to make a positive
              difference in the world.
            </p>
          </div>
          <div className="flex gap-8 my-4">
            <div className="w-[350px] h-[280px] bg-neutral-100 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl">
              <MdOutlineDesignServices className="text-5xl" />
              <h1 className="text-3xl">Design</h1>
              <p className="text-neutral-500 text-center">
                We believe in the power of thoughtful design, creating products
                that blend aesthetically and functionally.
              </p>
            </div>
            <div className="w-[350px] h-[280px] bg-neutral-100 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl">
              <MdGppGood className="text-5xl" />
              <h1 className="text-3xl">Quality</h1>
              <p className="text-neutral-500 text-center">
                Quality is at the forefront of everything we do. From materials
                selection to manufacturing processes.
              </p>
            </div>
            <div className="w-[350px] h-[280px] bg-neutral-100 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl">
              <PiCompassToolFill className="text-5xl" />
              <h1 className="text-3xl">Innovation</h1>
              <p className="text-neutral-500 text-center">
                We foster a culture of innovation, constantly pushing the
                boundaries of what is possible and embracing new technologies.
              </p>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="w-[350px] h-[280px] bg-neutral-100 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl">
              <RiUserHeartFill className="text-5xl" />
              <h1 className="text-3xl">Passion</h1>
              <p className="text-neutral-500 text-center">
                We are deeply passionate about what we do, and that passion
                fuels our commitment to delivering exceptional products.
              </p>
            </div>
            <div className="w-[350px] h-[280px] bg-neutral-100 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl">
              <RiTeamFill className="text-5xl" />
              <h1 className="text-3xl">Team Work</h1>
              <p className="text-neutral-500 text-center">
                By fostering an environment of trust and open communication, we
                leverage the diverse skills and perspectives of our team.
              </p>
            </div>
            <div className="w-[350px] h-[280px] bg-neutral-100 flex flex-col justify-center items-center gap-4 p-6 rounded-3xl">
              <PiHandHeartBold className="text-5xl" />
              <h1 className="text-3xl">Sustainability</h1>
              <p className="text-neutral-500 text-center">
                We are committed to sustainability and minimizing our
                environmental footprints and promoting eco-friendly practices
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
