import css from './../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { ProductCardProps, ProductContextProps } from '../interfaces';
import React, { createContext } from 'react';

export const ProductContext = createContext({} as ProductContextProps);
export const ProductCard = ({ product, children, className, style,onChange,value,initialValues }: ProductCardProps) => {
  const { counter, increaseBy,reset,maxCount,isMaxCountReached } = useProduct({ product,onChange,value,initialValues })
  return (
    <ProductContext.Provider value={{
      counter, increaseBy, product,maxCount,isMaxCountReached
    }}>
      <div className={`${css.productCard} ${className}`} style={style}>
        {children({
          count : counter, 
          increaseBy,
          reset,
          maxCount,
          isMaxCountReached, 
          product,
        })}
      </div>
    </ProductContext.Provider>
  )
}
