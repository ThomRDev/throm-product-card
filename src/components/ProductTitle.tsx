import React, { useContext } from 'react'
import css from './../styles/styles.module.css'
import { ProductContext } from './ProductCard'
import { ProductTitleProps } from '../interfaces/product';

export const ProductTitle = ({ title = null,className,style } : ProductTitleProps) => {
  const { product } = useContext(ProductContext)
  return (
    <span className={`${css.productDescription} ${className}`} style={style}>{ title ?? product.title }</span>

  )
}
