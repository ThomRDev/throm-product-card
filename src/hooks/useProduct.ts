import { useEffect, useLayoutEffect, useRef, useState,useMemo } from 'react'
import { Product, onChangeArgs, InitialValues } from '../interfaces/product';



interface useProductArgs {
    product : Product;
    onChange?:(args:onChangeArgs) => void,
    value?: number,
    initialValues ?: InitialValues
}

export const useProduct = ({ product,onChange,value = 0,initialValues }:useProductArgs) => {
    
    const [ counter, setCounter ] = useState<number>(initialValues?.count ?? value)
    const isMounted = useRef(false)

    const increaseBy = ( valueIncrease: number ) => {
        
        let newValue = Math.max(counter + valueIncrease,0)
        if(initialValues?.maxCount){
            newValue = Math.min(newValue,initialValues.maxCount)
        }
        setCounter(newValue)
        onChange && onChange({ count: newValue, product });
    }

    const reset = () => {
        setCounter(initialValues?.count ?? value )
    }

    useEffect(() => {
        if(!isMounted.current) return
        setCounter( value );
    }, [ value ])

    useLayoutEffect(()=>{
        isMounted.current = true
    },[])

    const isMaxCountReached = useMemo(()=> initialValues?.count != null && initialValues.maxCount === counter,[counter])
    return {
        counter,
        maxCount: initialValues?.maxCount,

        isMaxCountReached,

        increaseBy,
        reset
    }

}