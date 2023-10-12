import { IoFilterSharp } from 'react-icons/io5';
import ItemContainer from '../components/product/ItemContainer';
import { CategoryButton } from '../components/ActionButton';

export default function StorePage() {
  return (
    <div className="mx-16 my-10 ">
      <h1 className="text-4xl mb-10 px-40">Store</h1>
      <div className="flex justify-between items-center mb-7 px-40">
        <div className="flex gap-8">
          <CategoryButton title="All" />
          <CategoryButton title="GEAR" />
          <CategoryButton title="TECHNOLOGY" />
          <CategoryButton title="ACCESSORY" />
        </div>
        <IoFilterSharp className="text-3xl cursor-pointer" />
      </div>
      <div className="flex justify-center gap-10">
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697131914/project/Lryx-Watch_hkkuqt.png"
          name="Lryx Watch"
          description="Elevate your style with the sophisticated Lryx Watch, a perfect"
          category="GEAR"
          price="349.99"
        />
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134227/project/VR_Headset_mpnhpj.png"
          name="VR Headset"
          description="Step into the realm of virtual reality and unlock immersive experiences"
          category="TECHNOLOGY"
          price="549.99"
        />
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134228/project/Premium_Earbuds_kuv6d3.png"
          name="Premium Earbuds"
          description="Immerse yourself in premium sound quality and enjoy the ultimate"
          category="GEAR"
          price="389.99"
        />
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134227/project/Phone_Charger_Port_ojsq3a.png"
          name="Phone Charger Port"
          description="Stay connected and keep your devices powered up with our convenient "
          category="ACCESSORY"
          price="199.99"
        />
      </div>
      <div className="flex justify-center gap-10">
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697131914/project/Lryx-Watch_hkkuqt.png"
          name="Lryx Watch"
          description="Elevate your style with the sophisticated Lryx Watch, a perfect"
          category="GEAR"
          price="349.99"
        />
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134227/project/VR_Headset_mpnhpj.png"
          name="VR Headset"
          description="Step into the realm of virtual reality and unlock immersive experiences"
          category="TECHNOLOGY"
          price="549.99"
        />
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134228/project/Premium_Earbuds_kuv6d3.png"
          name="Premium Earbuds"
          description="Immerse yourself in premium sound quality and enjoy the ultimate"
          category="GEAR"
          price="389.99"
        />
        <ItemContainer
          src="https://res.cloudinary.com/der7sk8rq/image/upload/v1697134227/project/Phone_Charger_Port_ojsq3a.png"
          name="Phone Charger Port"
          description="Stay connected and keep your devices powered up with our convenient and versatile phone charger port"
          category="ACCESSORY"
          price="199.99"
        />
      </div>
    </div>
  );
}
