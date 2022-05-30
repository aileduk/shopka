import styled, {css} from "styled-components";

export const ProductWrapper = styled.div`
  max-width: 1430px;
  width: 100%;
  margin: 0 auto;
  padding: 20px 15px 20px 15px;
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`

export const ProductImg = styled.img`
  width: 30%;
  @media (max-width: 800px) {
    margin-bottom: 20px;
    width: 80%;
  }
`

export const ProductInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media (max-width: 800px) {
    width: 100%;
  }
  
`

export const ProductTitle = styled.div`
  font-weight: 500;
  font-size: 28px;
  line-height: 150%;
  letter-spacing: 0.0275em;
  color: #19191D;
  @media (max-width: 800px) {
    font-size: 22px;
  }
`

export const ProductPrice = styled.div`
  font-weight: 700;
  font-size: 48px;
  line-height: 150%;
  color: rgba(0, 0, 0, 0.87);
`

export const ProductDesc = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0.0275em;
  color: #19191D;
`

export const WrapperButtonAndRating = styled.div`
  display: flex;
`

export const ProductRatingWrapper = styled.div`
  display: flex;
  margin-left: 30px;
  align-items: flex-end;

`

export const ProductRating = styled.div`
  margin-left: 10px;
`

export const AddProductButton = styled.button`
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

export const BackMainPageButton = styled.button`
  padding: 6px 12px;
  background: #EBF2FF;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.75px;
  text-transform: capitalize;
  color: #2264D1;
  max-width: 50%;
  &:hover {
    color: #EBF2FF;
    background: #2264D1;
  }
  transition: all .2s ease;
`