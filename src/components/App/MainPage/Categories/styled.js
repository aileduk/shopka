import styled from "styled-components"
import { css } from "styled-components"

export const CategoriesWrapper = styled.div`
  max-width: 250px;
  width: 100%;
  padding-top: 20px;
  @media (max-width: 599px) {
    text-align: center;
  }
`

export const CategoriesTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.022em;
`

export const Ul = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  @media (max-width: 599px) {
    margin-left: 0;
  }
`

export const Li = styled.li`
  cursor: pointer;
  & + & {
    margin-top: 10px;
  }
  &:hover {
    color: #2264D1;
  }
  ${props => props.focus && css`
    color: #2264D1;
  `}
`

export const SortBy = styled.div`
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: #787885;
  margin: 20px 0px 20px 20px;
  @media (max-width: 599px) {
    margin-left: 0;
  }
`

export const Select = styled.select`
  padding: 5px 35px 5px 15px;
  border: 1px solid #B4BBE2;
  cursor: pointer;
`