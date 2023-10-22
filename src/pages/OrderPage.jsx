import OrderList from '../components/product/OrderList';
import useProduct from '../hooks/use-product';

export default function OrderPage() {
  const { order } = useProduct();

  return (
    <div className=" flex flex-col mx-80 my-24 gap-4 ">
      {order?.map((order) => (
        <OrderList key={order.id} order={order} />
      ))}
    </div>
  );
}
