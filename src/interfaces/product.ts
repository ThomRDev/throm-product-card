import { ReactElement } from 'react';
import { ExtensibleStyles } from './styles';
export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface InitialValues {
  count ?: number;
  maxCount ?:number
}

export interface ProductCardProps extends ExtensibleStyles {
  product: Product;
  // children?: ReactElement | ReactElement[]
  children: ( args: ProductCardHandlers ) => JSX.Element,
  onChange?:(args:onChangeArgs) => void,
  value?: number
  initialValues ?: InitialValues
}

export interface ProductImageProps extends ExtensibleStyles {
  img?: string | null
}
export interface ProductTitleProps extends ExtensibleStyles {
  title?: string | null
}
export interface ProductButtonsProps extends ExtensibleStyles {
}

export interface ProductContextProps{
  counter:number,
  increaseBy : (value : number) => void
  product : Product

  maxCount?: number;
  isMaxCountReached?:boolean

}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: ( value: number ) => void;
  reset: () => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps ):JSX.Element,
  Title: (Props:ProductTitleProps) => JSX.Element,
  Image: (Props:ProductImageProps) => JSX.Element,
  Buttons: (Props:ProductButtonsProps) => JSX.Element
}

export interface ProductInCart extends Product {
  count: number
}