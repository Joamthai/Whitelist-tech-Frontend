import useAuth from '../../hooks/use-auth';
import useProduct from '../../hooks/use-product';
import { getAccessToken } from '../../utils/local-storage';
import AddItemContainer from './AddItemContainer';
import ItemContainer from './ItemContainer';

export default function ItemList() {
  const { allProducts } = useProduct();
  const { authUser } = useAuth();
  return (
    <div className="flex flex-wrap gap-6">
      {!getAccessToken() || authUser.role === 'USER' ? null : (
        <AddItemContainer />
      )}
      {allProducts.map((product) => (
        <ItemContainer key={product.id} product={product} />
      ))}
    </div>
  );
}
