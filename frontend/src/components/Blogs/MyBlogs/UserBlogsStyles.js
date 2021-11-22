import styled from "styled-components"

export const Title = styled.h2`
  width: fit-content;
  margin: auto;
  background: linear-gradient(45deg, #e72142, #004797);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: 36px;
  text-align: center;
`

export const NoBlogImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 50px 0px;
  min-height: 50vh;
  img {
    width: 30%;
    height: ${({ h }) => h};
    object-fit: cover;
    border-radius: 6px;
  }
`

export const DeleteWrapper = styled.div`
  .delete {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      cursor: pointer;
    }
  }
`

export const DeletePopup = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: 100ms cubic-bezier(0.4, 0, 1, 1) fadeIn 1;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      visibility: hidden;
    }
    100% {
      opacity: 1;
      visibility: visible;
    }
`

export const PopupContent = styled.div`
  z-index: 10;
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 6px;
  text-align: center;
  width: min(90%, 27rem);

  .warning {
    color: ${({ theme }) => theme.colors.red};
    font-size: 32px;
  }
  h3 {
    margin-bottom: 20px;
  }
  p {
    margin: 20px 0px;
  }

  @media (max-width: 600px) {
    padding: 24px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 15px;
`

export const NoButton = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.text};
  background-color: transparent;
  cursor: pointer;
  border-radius: 6px;
  padding: 10px 20px;
`

export const ConfirmButton = styled.button`
  border: none;
  color: ${({ theme }) => theme.colors.neutral};
  background-color: ${({ theme }) => theme.colors.red};
  cursor: pointer;
  border-radius: 6px;
  padding: 10px 20px;
`
