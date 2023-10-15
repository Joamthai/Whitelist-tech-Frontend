import { getAccessToken } from '../../utils/local-storage';
import AddItemContainer from './AddItemContainer';
import ItemContainer from './ItemContainer';

export default function ItemList({
  authUser,
  allProducts,
  createProduct,
  deleteProduct,
}) {
  console.log(allProducts);
  return (
    <div className="flex flex-wrap gap-6">
      {!getAccessToken() || authUser.role === 'USER' ? null : (
        <AddItemContainer createProduct={createProduct} />
      )}
      {allProducts.map((el) => {
        return (
          <ItemContainer
            key={el.id}
            src={el.image}
            name={el.name}
            description={el.description}
            category={el.category.name}
            price={el.price}
            stock={el.stock}
            // productObj={el}
            deleteProduct={deleteProduct}
          />
        );
      })}
    </div>
  );
}
// src={el.image}
// name={el.name}
// description={el.description}
// category={el.category.name}
// price={el.price}
// stock={el.stock}
