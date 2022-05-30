import React, { useContext, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImgWrapper, ProductButton, ProductCard, ProductCardFooter, ProductDescription, ProductImg, ProductPrice, ProductRating, ProductRatingWrapper, ProductsWrapper, ProductTitle } from './styled';
import { Context } from '../../../../Context/context';
import ReactStars from "react-rating-stars-component";
import { getFilteredProducts } from '../../../../helpers/getFilteredProducts';

const Products = () => {
  
  const { products, productsInCart, filter, sort, setProduct, addProductToCart } = useContext(Context)
  
  const navigate = useNavigate()
  
  const filterProducts = useMemo(() => {
    return getFilteredProducts(filter, products, sort)
  }, [filter, products, sort])

  const productInfo = (item) => {
    navigate("/product");
    setProduct(item)
  }

  return (
    <ProductsWrapper>
      {filterProducts.map(item => (
        <ProductCard key={item.id} onClick={() => productInfo(item)}>
          <ImgWrapper>
            <ProductImg key={item.id} src={item.image} />
          </ImgWrapper>
          <ProductTitle>{item.title}</ProductTitle>
          <ProductPrice>{`$${item.price}`}</ProductPrice>
          <ProductDescription>{item.description}</ProductDescription>
          <ProductCardFooter>
            <ProductRatingWrapper>
              <ReactStars
                count={5}
                size={20}
                value={item.rating.rate}
                edit={false}
                isHalf={true}
                activeColor="#ffd700"
              />
              <ProductRating>
                {item.rating.rate}
              </ProductRating>
            </ProductRatingWrapper>
            <ProductButton added={productsInCart.some(prod => prod.id === item.id)} onClick={(event) => addProductToCart(event, item)}>{productsInCart.some(prod => prod.id === item.id) ? "Added" : "Add to cart"}</ProductButton>
          </ProductCardFooter>
        </ProductCard>
      ))}
    </ProductsWrapper>
  )
}

export default Products