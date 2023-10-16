import { getAccessToken } from '../../utils/local-storage';
import AddItemContainer from './AddItemContainer';
import ItemContainer from './ItemContainer';

export default function ItemList({
  authUser,
  allProducts,
  createProduct,
  deleteProduct,
}) {
  return (
    <div className="flex flex-wrap gap-6">
      {!getAccessToken() || authUser.role === 'USER' ? null : (
        <AddItemContainer createProduct={createProduct} />
      )}
      {allProducts.map((product) => (
        <ItemContainer
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}
