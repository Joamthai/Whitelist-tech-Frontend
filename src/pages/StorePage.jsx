import { IoFilterSharp } from 'react-icons/io5';
import { CategoryButton } from '../components/ActionButton';
import { useEffect, useState } from 'react';
import axios from '../config/axios';
import useAuth from '../hooks/use-auth';
import ItemList from '../components/product/ItemList';

export default function StorePage() {
  const [allProducts, setAllProducts] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const { authUser } = useAuth();

  const createProduct = async (data) => {
    const res = await axios.post('/product', data);
    const newProduct = res.data.product;
    setAllProducts([newProduct, ...allProducts]);
  };

  const updateProduct = async (data) => {
    const res = await axios.patch('/product', data);
    console.log(res);
  };

  const deleteProduct = async (productId) => {
    try {
      await axios.delete(`/product/${productId}`);
      setAllProducts(allProducts.filter((product) => product.id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    axios
      .get('/product')
      .then((res) => {
        setAllProducts(res.data.products);
        setAllCategory(res.data.category);
      })
      .catch((error) => {
        throw error;
      });
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

      <ItemList
        authUser={authUser}
        allProducts={allProducts}
        allCategory={allCategory}
        createProduct={createProduct}
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
      />
    </div>
  );
}
