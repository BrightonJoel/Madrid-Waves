import styled from "styled-components"

export const Background = styled.div`
  background-image: url(/img/${({ theme }) => theme.backgrounds.Background});
  // background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  padding: 0px;

  @media (max-width: 768px) {
    background: none;
  }
`

export const Article = styled.article`
  margin: 0 auto;
  padding: 48px 0px;
  width: 900px;
  max-width: 90%;

  h3 {
    background: ${({ theme }) => theme.colors.title};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-align: center;
    font-size: 48px;
    padding: 50px 0px;
  }

  @media (max-width: 768px) {
    h3 {
      font-size: 34px;
    }
  }
`
export const CreateForm = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
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
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: 2px dotted ${({ theme }) => theme.colors.blue};
    }
  }

  input[type="file"] {
    display: inline;
    width: 40%;
    margin-right: 20px;
  }

  select {
    appearance: none;
    border: none;
    border-radius: 6px;
    padding: 10px 20px;
    margin: 12px 0;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 50%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: 2px dotted ${({ theme }) => theme.colors.blue};
    }
  }

  Textarea {
    line-height: 1.7;
    border: none;
    border-radius: 6px;
    padding: 20px 20px;
    margin: 12px 0;
    background-color: ${({ theme }) => theme.colors.primary};
    width: 100%;
    color: ${({ theme }) => theme.colors.text};

    &:focus {
      outline: 2px dotted ${({ theme }) => theme.colors.blue};
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

  @media (max-width: 768px) {
    input[type="file"] {
      display: inline;
      width: 250px;
      margin-right: 20px;
    }
  }
`
export const FileDiv = styled.div`
  .UploadWrapper {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    align-items: center;
  }
`
