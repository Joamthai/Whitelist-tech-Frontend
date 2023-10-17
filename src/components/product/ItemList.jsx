import { getAccessToken } from '../../utils/local-storage';
import AddItemContainer from './AddItemContainer';
import ItemContainer from './ItemContainer';

export default function ItemList({
  authUser,
  allProducts,
  allCategory,
  createProduct,
  updateProduct,
  deleteProduct,
}) {
  return (
    <div className="flex flex-wrap gap-6">
      {!getAccessToken() || authUser.role === 'USER' ? null : (
        <AddItemContainer
          allCategory={allCategory}
          createProduct={createProduct}
        />
      )}
      {allProducts.map((product) => (
        <ItemContainer
          key={product.id}
          product={product}
          updateProduct={updateProduct}
          deleteProduct={deleteProduct}
        />
      ))}
    </div>
  );
}
