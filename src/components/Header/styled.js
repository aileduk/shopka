import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 20px 48px;
  border-bottom: 1px solid #B4BBE2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    padding: 15px 24px;
  }
`

export const LogoWrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const LogoText = styled.div`
  font-size: 36px;
  line-height: 36px;
  font-weight: 500;
  color: #0C2146;
  margin-left: 12px;
  @media (max-width: 410px) {
    display: none;
  }
`

export const CartWrapper = styled.a`
  padding: 6px 12px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2), 0px 4px 8px rgba(41, 121, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: #2264D1;
  font-weight: 700;
  cursor: pointer;
  position: relative;
`

export const CountProducts = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #F44336;
  color: #fff;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.75px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 55%;
  right: 20%;
`

export const InsideCart = styled.a`
  padding: 6px 12px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(27, 78, 163, 0.2), 0px 4px 8px rgba(41, 121, 255, 0.2);
  border-radius: 4px;
  display: flex;
  align-items: center;
  color: #2264D1;
  font-weight: 700;
  cursor: pointer;
`