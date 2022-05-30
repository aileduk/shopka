import React, { useContext } from 'react'
import { Context } from '../../../Context/context'
import Header from '../../Header/Header'
import Modal from '../../Modal/Modal';
import { ProductsWrapper, ButtonBuy, EmptyCart, ButtonMinus, ButtonPlus, ButtonsBlock, CartWrapper, CountInfo, Image, InfoBlock, InfoDesc, InfoPrice, InfoTitle, ProductBlock, RemoveBlock, RemoveButton, TotalBlock, TotalPrice, TotalPriceProduct } from './styled';

const CartPage = () => {

    const { productsInCart, setProductsInCart, setCountProduct, setModal } = useContext(Context);

    const plusProduct = (item) => {
        setCountProduct(item.count += 1)
        item.totalPrice += item.price
    }

    const minusProduct = (item) => {
        setCountProduct(item.count > 1 ? item.count -= 1 : item.count = 1)
        item.count > 1 ? item.totalPrice -= item.price : item.totalPrice = item.price
    }

    let priceOfAllProducts = 0
    productsInCart.forEach(item => {
        priceOfAllProducts = priceOfAllProducts + item.totalPrice
    })

    const removeProduct = (index, item) => {
        setProductsInCart(prev => (prev.includes(item) ? [prev.splice(index, 1)] : prev))
    }

    return (
        <>
            <Header />
            <CartWrapper>
                {productsInCart.length === 0
                    ?
                    <EmptyCart>Cart is empty</EmptyCart>
                    :
                    <ProductsWrapper>
                        {productsInCart.map((item, index) => (
                            <ProductBlock key={item.id}>
                                <Image src={item.image} />
                                <InfoBlock>
                                    <InfoTitle>{item.title.slice(0, 80)}</InfoTitle>
                                    <InfoDesc>{`${item.description.slice(0, 200)}`}</InfoDesc>
                                    <InfoPrice>{`$${item.price}`}</InfoPrice>
                                </InfoBlock>
                                <ButtonsBlock>
                                    <ButtonMinus onClick={() => minusProduct(item)}>-</ButtonMinus>
                                    <CountInfo>{item.count}</CountInfo>
                                    <ButtonPlus onClick={() => plusProduct(item)}>+</ButtonPlus>
                                </ButtonsBlock>
                                <RemoveBlock>
                                    <TotalPriceProduct>{`$${item.totalPrice.toFixed(2)}`}</TotalPriceProduct>
                                    <RemoveButton onClick={() => removeProduct(index, item)}>Remove</RemoveButton>
                                </RemoveBlock>
                            </ProductBlock>
                        ))}
                    </ProductsWrapper>}
                <TotalBlock>
                    <TotalPrice>{`Total: $${priceOfAllProducts.toFixed(2)}`}</TotalPrice>
                    <ButtonBuy disabled={productsInCart.length === 0} onClick={() => setModal(true)}>{productsInCart.length === 0 ? "Cart is empty" : "Buy"}</ButtonBuy>
                    <Modal />
                </TotalBlock>
            </CartWrapper>
        </>
    )
}

export default CartPage