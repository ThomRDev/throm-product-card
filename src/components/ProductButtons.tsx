import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import css from './../styles/styles.module.css'
import { ProductButtonsProps } from '../interfaces/product';
export const ProductButtons = ({className,style}:ProductButtonsProps) => {
  const { increaseBy, counter,isMaxCountReached } = useContext(ProductContext);

  return (
    <div className={ `${ css.buttonsContainer} ${ className }` } style={ style }>
      <button
        className={css.buttonMinus}
        onClick={() => increaseBy(-1)}> - </button>

      <div className={css.countLabel}> {counter} </div>

      <button
        className={ `${ css.buttonAdd } ${ isMaxCountReached ? css.disabled : "" } ` }
        onClick={() => increaseBy(+1)}> + </button>
    </div>
  );
}
