import React, { useContext } from 'react';
import { CartWrapper, CountProducts, HeaderWrapper, InsideCart, LogoText, LogoWrapper } from './styled';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context/context';


const Header = () => {

  const { onCartPage, setOnCartPage, productsInCart } = useContext(Context)

  const navigate = useNavigate()

  const setCartButton = () => {
    setOnCartPage(!onCartPage)
    if (onCartPage) {
      navigate('/')
    } else {
      navigate('/cart')
    }
  }

  const backToMainPage = () => {
    navigate('/')
    setOnCartPage(false)
  }

  return (
    <HeaderWrapper>
      <LogoWrapper onClick={() => backToMainPage()}>
        <Logo />
        <LogoText>Shopka</LogoText>
      </LogoWrapper>
      {!onCartPage
        ?
        <CartWrapper onClick={() => setCartButton()}>
          My cart
          <CountProducts>
            {Number(productsInCart.length)}
          </CountProducts>
        </CartWrapper>
        :
        <InsideCart onClick={() => setCartButton()}>
          Back to products
        </InsideCart>}
    </HeaderWrapper>
  )
}

export default Header