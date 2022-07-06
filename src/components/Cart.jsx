import { useContext, useEffect } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ProductAmountContainer, ProductAmount, ProductPrice, Hr } from './styledComponents';

const Cart = () => {
    const test = useContext(CartContext);

    console.log(test.cartList);

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <ContentCart>
                {
                    test.cartList.map(item => (
                        <Product key={item.id}>
                        <ProductDetail>
                            <ImageCart src={item.image[0]} />
                            <Details>
                            <span>
                                <b>Product:</b> {item.name}
                            </span>
                            </Details>
                        </ProductDetail>
                        <PriceDetail>
                            <ProductAmountContainer>
                            <ProductAmount>{item.qty} items</ProductAmount>
                            </ProductAmountContainer>
                            <ProductPrice>$ {item.cost} each</ProductPrice>
                        </PriceDetail>
                        </Product>
                    ))
                }
                    
            </ContentCart>
        </WrapperCart>
    );
}

export default Cart;