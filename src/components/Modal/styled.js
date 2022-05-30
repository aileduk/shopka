import styled, { css } from "styled-components";

export const ModalWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  pointer-events: none;
  transition: all 0.4 ease;
  z-index: 100;
  ${props => props.modal && css`
      opacity: 1;
      pointer-events: all;
  `}
`

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  width: 50vw;
  height: 50vh;
  background-color: #2264D1;
  text-align: center;
  @media(max-width: 720px) {
    width: 70vw;
  }
`

export const ModalText = styled.div`
  color: #EBF2FF;
  text-align: center;
  font-size: 34px;
  font-weight: 700;
  @media(max-width: 980px) {
    font-size: 24px;
  }
  @media(max-width: 720px) {
    margin-bottom: 15px;
  }
`

export const ModalForm = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  @media(max-width: 720px) {
    gap: 10px;
    justify-content: flex-start;
  }
`
export const ModalInputWrapper =styled.div`
  display: flex;
  gap: 10px;
  /* height: 10%; */
  width: 100%;
  @media(max-width: 720px) {
    flex-direction: column;
  }
`

export const ModalInput = styled.input`
  width: 50%;
  padding: 5px 10px 5px 10px;
  background: #EBF2FF;
  border-radius: 5px;
  @media(max-width: 720px) {
    width: 100%;
  }
`
export const ModalTextArea = styled.textarea`
  width: 100%;
  height: 25%;
  padding: 5px 10px 5px 10px;
  resize: none;
  background: #EBF2FF;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`

export const ModalButton = styled.button`
  color: #000;
  background-color: #EBF2FF;
  padding: 5px 10px;
  border-radius: 5px;
  font-weight: 700;
  text-transform: uppercase;
  &:hover {
    background-color: #fff;
  }
  transition: all .2s ease;
`

export const ModalImgWrapper = styled.div`
  height: 100%;
  margin: 0 auto;
`

export const ModalImage = styled.img`
  height: 100%;
  border-radius: 5px;
`

