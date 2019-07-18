import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import { FaTimes } from "react-icons/fa"

// https://upmostly.com/tutorials/modal-components-react-custom-hooks

export default ({ isShowing, hide, children, title }) =>
  isShowing
    ? ReactDOM.createPortal(
        // <ModalOverlay onClick={hide}>
        <ModalOverlay>
          <ModalWrapper aria-modal aria-hidden tab-Index={-1} role="dialog">
            <Modal>
              <Header>
                <Title>{title}</Title>
                <CloseButton
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">
                    <StyledIcon></StyledIcon>
                  </span>
                </CloseButton>
              </Header>
              <div>{children}</div>
            </Modal>
          </ModalWrapper>
        </ModalOverlay>,
        document.body
      )
    : null

const ModalOverlay = styled.div`
  z-index: 50;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5vh 5vw;
`

const ModalWrapper = styled.div`
  z-index: 500;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled.div`
  width: 100%;
  padding: 1.5rem;
  height: auto;
  max-width: 600px;
  max-height: 90vh;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 500;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`

const Title = styled.h3`
  font-weight: 400;
  margin: 0;
`

const CloseButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
`

const StyledIcon = styled(FaTimes)`
  display: block;
  font-size: 1.5rem;
  transition: var(--mainTransition);
  ${CloseButton}:hover & {
    transform: rotate(-180deg);
  }
`
