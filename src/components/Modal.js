import React from "react"
import ReactDOM from "react-dom"
import styled from "styled-components"

import { FaTimes } from "react-icons/fa"

export default ({ isShowing, hide, children }) =>
  isShowing
    ? ReactDOM.createPortal(
        <ModalOverlay onClick={hide}>
          <ModalWrapper aria-modal aria-hidden tab-Index={-1} role="dialog">
            <Modal>
              <Header>
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
              <Body>{children}</Body>
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
`

const Modal = styled.div`
  width: 100%;
  padding: 1rem;
  height: auto;
  max-height: 90vh;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  z-index: 500;
`

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
`

const CloseButton = styled.button`
  padding: 0;
  border: none;
  background: transparent;
`

const Body = styled.div``

const StyledIcon = styled(FaTimes)`
  display: block;
  font-size: 1.5rem;
  transition: var(--mainTransition);
  ${CloseButton}:hover & {
    transform: rotate(-180deg);
  }
`
