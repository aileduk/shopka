import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../Context/context';
import Header from '../../Header/Header';
import ReactStars from 'react-rating-stars-component';
import { BackMainPageButton, AddProductButton, ProductWrapper, ProductDesc, ProductImg, ProductInfo, ProductPrice, WrapperButtonAndRating, ProductRating, ProductRatingWrapper, ProductTitle } from './styled';

const ProductPage = () => {

    const { product, addProductToCart, productsInCart, setOnCartPage } = useContext(Context);

    const navigate = useNavigate()

    const backToMainPage = () => {
        navigate('/')
        setOnCartPage(false)
    }

    return (
        <>
            <Header />
            <ProductWrapper>
                <ProductImg src={product.image} />
                <ProductInfo>
                    <ProductTitle>{product.title}</ProductTitle>
                    <ProductPrice>{`$${product.price}`}</ProductPrice>
                    <WrapperButtonAndRating>
                        <AddProductButton added={productsInCart.some(prod => prod.id === product.id)} onClick={event => addProductToCart(event, product)}>{productsInCart.some(prod => prod.id === product.id) ? "Added" : "Add cart"}</AddProductButton>
                        <ProductRatingWrapper>
                            <ReactStars
                                count={5}
                                size={20}
                                value={product.rating.rate}
                                edit={false}
                                isHalf={true}
                                activeColor="#ffd700"
                            />
                            <ProductRating>{product.rating.rate}</ProductRating>
                        </ProductRatingWrapper>
                    </WrapperButtonAndRating>
                    <ProductDesc>{product.description}</ProductDesc>
                    <BackMainPageButton onClick={() => backToMainPage()}>Back To Shoping List</BackMainPageButton>
                </ProductInfo>
            </ProductWrapper>
        </>
    )
}

export default ProductPage