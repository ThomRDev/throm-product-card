import React from 'react'
import renderer from 'react-test-renderer'
import { ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductCard', () => {
    
    test('debe de mostrar el componente correctamente', () => {

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )
        
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });

    test('debe de incrementar el contador', () => {


        const wrapper = renderer.create(
            <ProductCard product={ product1 }
                initialValues={{
                    count : 0
                }}
            >
                {
                    ({ count, increaseBy }) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{ count }</span>
                            <button onClick={ () => increaseBy(+1)}>+1</button>
                        </>
                    )
                }
            </ProductCard>
        );

        const button = wrapper.root.findByType('button');
        renderer.act(() => {
            button.props.onClick();
        });
        renderer.act(() => {
            button.props.onClick();
        });
        let tree = wrapper.toJSON();
        expect( tree ).toMatchSnapshot();
        
        // act(() => {
        //     (tree as any).children[2].props.onClick();
        // })
        // act(() => {
        //     (tree as any).children[2].props.onClick();
        // })
        // const button = (tree as any).find((el:any) => el.type === 'button');
        // button.props.onClick();
        expect((tree as any).children[1].children[0]).toBe('1')

        

    })
    
    

})