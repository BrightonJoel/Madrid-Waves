import styled from "styled-components"

export const Background = styled.div`
  background-image: url(/img/${({ theme }) => theme.colors.headBackground});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  padding: 0px;
  height: 780px;
  @media (max-width: 768px) {
    background: none;
  }
`

export const Container = styled.main`
  margin: 48px auto;
  width: 600px;
  max-width: 90%;
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 40px 20px;
  border-radius: 6px;

  h2 {
    text-align: left;
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    display: inline;
    margin-right: 10px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
`

export const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Label = styled.label`
  display: block;
  font-size: 24px;
  padding: 25px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px 0;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors.lightGrey};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 6px;

  &:focus {
    outline: 2px dotted ${({ theme }) => theme.colors.primaryBlue};
  }
`

export const ErrorWrapper = styled.div`
  padding: 15px;
  border: 2px dotted ${({ theme }) => theme.colors.red};

  button {
    margin-left: 10px;
  }
`

export const UserFoundContainer = styled.div`
  height: 400px;
  img {
    width: 100%;
    height: 400px;

    &:hover {
      cursor: pointer;
    }
  }
`

export const LoginFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
`
