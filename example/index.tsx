import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../.';

const product = {
  id: '1',
  title: 'Coffee Mug - Card',
}

const App = () => {
  return (
    <>
      <ProductCard
        product={product}
        className="bg-dark text-white"
        // value={shoppingCart[product.id]?.count || 0}
        initialValues={{
          count: 0,
          maxCount: 5
        }}
      >
        {({ count, increaseBy, isMaxCountReached, product, reset, maxCount }) => {
          return <>
            <ProductCard.Image 
              className="custom-image" 
              style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} 
            />
            <ProductCard.Title className="text-bold" />
            <ProductCard.Buttons className="custom-buttons" />
            <button onClick={reset}>Reset</button>
            <button onClick={() => increaseBy(-2)}> -2 </button>
            {
              (!isMaxCountReached && <button onClick={() => increaseBy(+2)}> +2 </button>)
            }

            <span>{count} - {maxCount}</span>
          </>
        }}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
