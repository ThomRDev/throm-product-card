import css from './../styles/styles.module.css'
import noImage from './../assets/no-image.jpg'
import { ProductContext } from './ProductCard'
import React, { useContext } from 'react'
import { ProductImageProps } from '../interfaces/product';

export const ProductImage = ({ img = null, className, style }: ProductImageProps) => {
  const { product } = useContext(ProductContext)
  return (
    <img src={img ?? (product.img ?? noImage)} alt={product?.title ?? ""} className={`${css.productImg} ${className}`} style={style} />
  )
}
