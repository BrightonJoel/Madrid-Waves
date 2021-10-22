import styled from "styled-components"

export const Container = styled.main`
  margin: 48px auto;
  width: 600px;
  max-width: 90%;
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 40px 20px;
  border-radius: 12px;

  h2 {
    text-align: left;
    font-size: 32px;
    margin-bottom: 20px;
  }

  p {
    display: inline;
    margin-right: 20px;
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
  padding: 30px 0;

  @media (max-width: 768px) {
    font-size: 18px;
    padding: 20px 0;
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 10px 20px;
  background-color: #f1f1f1;
  border: none;
  border-radius: 12px;

  &:focus {
    outline: 2px dotted ${({ theme }) => theme.colors.primaryBlue};
  }
`

export const ErrorWrapper = styled.div`
  padding: 15px;
  border: 2px dotted ${({ theme }) => theme.colors.red};
`
