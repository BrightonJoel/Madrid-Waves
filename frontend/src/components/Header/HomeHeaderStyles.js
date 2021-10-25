import styled from "styled-components"

export const NavContainer = styled.header`
  display: grid;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  height: 250px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto, auto;
`
export const Logo = styled.div`
  grid-column: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center; /* for single line flex container */
  align-content: center; /* for multi-line flex container */
  cursor: pointer;
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 12px;
  img {
    height: 100px;
    width: 100px;
  }
  h1 {
    display: inline-block;
  }

  @media (max-width: 768px) {
    h1 {
      display: none;
    }
  }
`
export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* for single line flex container */
  align-content: center; /* for multi-line flex container */
  color: ${({ theme }) => theme.colors.neutral};
  grid-column: 2 / 2;

  a {
    padding: 0 20px;
    color: ${({ theme }) => theme.colors.neutral};
    font-size: 20px;
  }
`
export const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* for single line flex container */
  align-content: center; /* for multi-line flex container */
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 12px;
  grid-column: 3 / 3;

  button {
    margin-right: 10px;
    font-size: 18px;
    border-radius: 5px;
  }
`
export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; /* for single line flex container */
  grid-row: 2 / 2;
  grid-column: 2 / 2;
  padding: 30px 0px;

  input {
    width: 50%;
    border-radius: 5px 0 0 5px;
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: None;
    outline: None;
    padding: 11px 20px;
  }
  button {
    font-size: 18px;
    border-radius: 0 5px 5px 0;
    transform: translateY(0.5px);
  }
  span {
    padding: 0 5px;
    display: inline-block;
    transform: translateY(2px);
  }
`
