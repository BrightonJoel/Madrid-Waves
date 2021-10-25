import styled from "styled-components"

export const MainDiv = styled.div`
  margin: 48px auto;
  width: 768px;
  max-width: 90%;

  h3 {
    text-align: center;
    font-size: 50px;
    padding: 50px 0px;
  }
`
export const CreateForm = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 12px;
  padding: 50px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 20px;
  }

  Label {
    font-size: 25px;
    display: block;
    padding: 10px 0;
  }
  input {
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    margin: 12px 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: 2px dotted ${({ theme }) => theme.colors.primaryBlue};
    }
  }
  select {
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    margin: 12px 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 50%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: 2px dotted ${({ theme }) => theme.colors.primaryBlue};
    }
  }

  Textarea {
    border: none;
    border-radius: 6px;
    padding: 20px 20px;
    margin: 12px 0;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: 2px dotted ${({ theme }) => theme.colors.primaryBlue};
    }
  }

  button {
    font-size: 18px;
    border-radius: 5px;

    height: 40px;
    margin: 10px 20px 10px 0;
    width: 200px;
  }

  span {
    padding: 0 6px;
    display: inline-block;
    transform: translateY(3px);
  }
`
