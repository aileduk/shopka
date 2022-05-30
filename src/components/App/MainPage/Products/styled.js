import styled, { css } from "styled-components"

export const ProductsWrapper = styled.div`
  display: flex;
  max-width: 1115px;
  width: 100%;
  flex-wrap: wrap;
  padding: 0px 20px 20px 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px -2px #B4BBE2;
`

export const ProductCard = styled.div`
  max-width: 25%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: all .2s ease;
  &:hover {
    box-shadow: 0px 5px 5px -2px #B4BBE2;
    transform: scale(1.01);
  }
  @media (max-width: 1280px) {
    max-width: 33.33%;
  }
  @media (max-width: 1040px) {
    max-width: 50%;
  }
  @media (max-width: 800px) {
    max-width: 100%;
    &:hover {
      box-shadow: none;
      transform: none;
    }
  }
`

export const ImgWrapper = styled.div`
  text-align: center;
`

export const ProductImg = styled.img`
  max-height: 300px;
  min-height: 300px;
`

export const ProductTitle = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.0275em;
  color: #19191D;
  margin: 15px 0px;
`

export const ProductPrice = styled.div`
font-weight: 700;
font-size: 24px;
line-height: 150%;
color: rgba(0, 0, 0, 0.87);
margin-top: auto;
`

export const ProductDescription = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 20px;
  max-height: 60px;
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.018em;
  color: #787885;
`

export const ProductCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`

export const ProductRatingWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`

export const ProductRating = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.1px;
  color: #5E6366;
  margin-left: 10px;
`

export const ProductButton = styled.button`
  border: 1px solid #9DC2FF;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  line-height: 143%;
  letter-spacing: 0.018em;
  color: #2264D1;
  padding: 0 12px;
  &:hover {
    background-color: #2264D1;
    color: #fff;
  }
  ${props => props.added && css`
    background-color: #2264D1;
    color: #fff;
  `}
  transition: all .2s ease;
`