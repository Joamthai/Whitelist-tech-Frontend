import ProductContextProvider from './contexts/ProductContext';
import Route from './router/Route';

function App() {
  return (
    <ProductContextProvider>
      <Route />
    </ProductContextProvider>
  );
}

export default App;
