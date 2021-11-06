import styled from "styled-components";

export const MainDiv = styled.div`
  margin: 48px auto;
  width: 768px;
  max-width: 90%;

  h3 {
    text-align: center;
    font-size: 50px;
    padding: 50px 0px;
  }
`;
export const CreateForm = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  border-radius: 12px;
  padding: 50px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 30px;
  }

  Label {
    font-size: 24px;
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

  input[type="file"] {
    display: inline;
    width: 50%;
  }
  select {
    appearance: none;
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
`;
export const FileDiv = styled.div`

margin-bottom: 20px;

  label {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    padding: 0.5rem;
    font-family: sans-serif;
    border-radius: 0.3rem;
    cursor: pointer;
    width: 100%;
    display:block;
    text-align: center;
    height: 160px;
    
  }
  input[type="file" i] {
    display: none;
  }
  button{
    margin: 20px;
    display:block;
    margin: 30px auto;
    
  }
  h1 {
    font-size: 20px;
    margin: 20px;
    float:center;
    
  }
`;
