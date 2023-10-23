import { IoFilterSharp } from 'react-icons/io5';
import { CategoryButton } from '../components/ActionButton';
import ItemList from '../components/product/ItemList';
import useProduct from '../hooks/use-product';
import { useEffect } from 'react';
import axios from '../config/axios';

export default function StorePage() {
  const { allCategory, setAllProducts } = useProduct();
  useEffect(() => {
    axios.get('/product').then((res) => {
      setAllProducts(res.data.products);
    });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-16 my-10 px-40">
      <h1 className="text-4xl mb-10">Store</h1>
      <div className="flex justify-between items-center mb-7">
        <div className="flex gap-8">
          <CategoryButton title="All" />
          {allCategory.map((category) => (
            <CategoryButton key={category.id} title={category.name} />
          ))}
        </div>
        <IoFilterSharp className="text-3xl cursor-pointer" />
      </div>
      <ItemList />
    </div>
  );
}
