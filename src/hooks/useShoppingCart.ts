import { useState } from 'react'
import { ProductInCart } from '../interfaces'
import { Product } from '../interfaces/product';

interface ShoppingCartState {
  [id:Product['id']] : ProductInCart
}

interface Parameters {
  count: number,
  product : Product
}

export const useShoppingCart = () => {
  
  const [shoppingCart,setShoppingCart] = useState<ShoppingCartState>({})

  const onProductCountChange = ({ count,product }:Parameters) => {
    setShoppingCart(oldShoppingCart => {
      
      const productInCart:ProductInCart = oldShoppingCart[product.id] ?? { ...product,count : 0}

      if(Math.max(productInCart.count + count,0) == 0) {
        const { [product.id]:toDelete,...rest } = oldShoppingCart
        return rest
      }
      productInCart.count += count
      return {
        ...oldShoppingCart,
        [product.id] : productInCart 
      }
    })
  }

  return {
    shoppingCart,
    onProductCountChange
  }
}
