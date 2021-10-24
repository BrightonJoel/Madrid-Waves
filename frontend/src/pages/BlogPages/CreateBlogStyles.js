import styled from 'styled-components';

export const MainDiv = styled.div`
  width: 60%;
  margin: 50px auto;
  padding: 5px;

  h1{
    text-align: center;  
    font-size: 50px;
    padding: 0 0 50px;
  }
`
export const CreateForm = styled.div`
  background-color: ${({ theme }) => theme.colors.neutral};
  padding: 50px;
  font-weight:500;
  Label{
    font-size: 25px;
    display:block;
    padding: 10px 0;
  }
  input{
    border-color: ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 5px;
    padding: 10px;
    margin: 12px 0;
    background-color:${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryBlue};
    border-width:1px;
    outline:None;
  }
  select{
    border-color: ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    background-color:${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryBlue};
    outline:None;

  }
  Textarea{
    border-color: ${({ theme }) => theme.colors.primaryBlue};
    border-radius: 5px;
    padding: 10px;
    margin: 10px 0;
    background-color:${({ theme }) => theme.colors.lightGrey};
    width: 100%;
    color: ${({ theme }) => theme.colors.primaryBlue};
    outline:None;
  }
  button{
    font-size:18px;
    border-radius:5px;
    
    height: 40px;
    margin: 10px  20px 10px 0;
    width: 200px;
  }
  span{
    
    padding: 0 5px;
    display:inline-block;
    transform: translateY(3px);
  }
  `