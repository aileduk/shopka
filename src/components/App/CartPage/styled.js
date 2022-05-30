import styled from "styled-components";

export const CartWrapper = styled.div`
  display: flex;
  gap: 50px;
  max-width: 1430px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px;
  @media(max-width: 1230px) {
    gap: 30px;
  }
  @media(max-width: 1100px) {
    flex-direction: column;
  }
`

export const ProductsWrapper = styled.div`
  max-width: 70%;
  @media(max-width: 1230px) {
    max-width: 80%;
  }
  @media(max-width: 1100px) {
    max-width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
`

export const EmptyCart = styled.div`
  width: 70%;
  font-size: 50px;
  font-weight: 700;
  text-align: center;
  @media (max-width: 1100px) {
    text-align: start;
  }
`

export const ProductBlock = styled.div`
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px #000; 
  display: flex;
  & + & {
    margin-top: 20px;
  }
  height: 200px;
  @media(max-width: 900px) {
    flex-direction: column;
    height: auto;
    width: 45%;
    &+& {
      margin: 0;
    }
  }
  @media(max-width: 600px) {
    width: 100%;
    &+& {
      margin-top: 10px;
    }
  }
`

export const Image = styled.img`
  max-width: 15%;
  @media(max-width: 900px) {
    max-width: 50%;
    margin-bottom: auto;
  }
`

export const InfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0px 35px 0px 20px;
  max-width: 60%;
  @media(max-width: 900px) {
    max-width: 100%;
    margin: 10px 0px 10px 0px;
  }
`
export const InfoTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.0275em;
  color: #19191D;
`
export const InfoDesc = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.018em;
  color: #787885;
`

export const InfoPrice = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.87);
`

export const ButtonsBlock = styled.div`
  background: #F0F0F0;
  display: flex;
  align-items: center;
  max-height: 30px;
  max-width: 10%;
  @media(max-width: 900px) {
    margin-left: 15px;
  }
`
export const ButtonPlus = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #fff;
  margin-right: -15px;
  border: 1px solid #f0f0f0
  `
export const ButtonMinus = styled.button`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #fff;
  margin-left: -15px;
  border: 1px solid #f0f0f0
`
export const CountInfo = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.018em;
  margin: 0px 15px;
`

export const RemoveBlock = styled.div`
  margin-left: 45px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 15%;
  @media(max-width: 900px) {
    margin: 10px 0px 0px 0px ;
    max-width: 100%;
  }
`
export const TotalPriceProduct = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.87);
`

export const RemoveButton = styled.button`
  background: #2264D1; 
  border-radius: 4px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  color: #EBF2FF;
  padding: 5px 10px;
  &:hover {
    background: #EBF2FF;
    color: #2264D1;
  }
  transition: all .2s ease;
`

export const TotalBlock = styled.div`
  max-width: 30%;
  @media(max-width: 1100px) {
    max-width: 100%;
  }
`

export const TotalPrice = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 143%;
  letter-spacing: 0.018em;
  margin-bottom: 100px;
  @media(max-width: 1230px) {
    font-size: 24px;
    margin-bottom: 50px;
  }
  @media(max-width: 1100px) {
    font-size: 36px;
  }
`
export const ButtonBuy = styled.button`
  background: #2264D1;
  border-radius: 4px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  color: #EBF2FF;
  &:hover {
    background: #EBF2FF;
    color: #2264D1;
  }
  transition: all .2s ease;
  width: 100%;
  padding: 5px 15px;
`