import { ArrowButton } from '../ActionButton';
import ItemContainer from './ItemContainer';

export default function ShowSomeProduct({ title }) {
  return (
    <div>
      <div className="flex justify-between items-center px-40 mb-7">
        <h1 className="text-4xl">{title}</h1>
        <ArrowButton title="Browse all products" />
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
