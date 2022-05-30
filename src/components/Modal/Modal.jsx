import React, { useContext } from 'react';
import { Context } from '../../Context/context';
import Img from "../../assets/feedback.png";
import { ModalButton, ModalContent, ModalForm, ModalInput, ModalImage, ModalInputWrapper, ModalText, ModalTextArea, ModalWrapper, ModalImgWrapper } from './styled';


function Modal() {
  const { modal, setModal, review, setReview, setProductsInCart} = useContext(Context)

  const modalClose = () => {
    setModal(false)
    setReview(false)
  }

  const addRewiev = () => {
    setReview(true)
    setProductsInCart([])
  }

  return (
    <ModalWrapper modal={modal} onClick={() => modalClose()}>
      {review
        ?
        <ModalContent>
          <ModalImgWrapper>
            <ModalImage src={Img} />
          </ModalImgWrapper>
        </ModalContent>
        :
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalText>Please send your feedback</ModalText>
          <ModalForm action=''>
            <ModalInputWrapper>
              <ModalInput placeholder='Name' type='text' />
              <ModalInput placeholder='Surname' type='text' />
            </ModalInputWrapper>
            <ModalTextArea placeholder='Your comment' />
            <ModalButton onClick={() => addRewiev()}>Submit</ModalButton>
          </ModalForm>
        </ModalContent>
      }
    </ModalWrapper>
  )
}

export default Modal