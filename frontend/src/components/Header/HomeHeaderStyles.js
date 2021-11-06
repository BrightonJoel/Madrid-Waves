import styled from "styled-components"

export const NavContainer = styled.header`
  display: grid;
  background-color: ${({ theme }) => theme.colors.primaryBlue};
  height: 250px;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto, auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto, auto, auto;
  }
`
export const Logo = styled.nav`
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

  @media (max-width: 1074px) {
    h1 {
      display: none;
    }
  }
`
export const NavLinks = styled.nav`
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

    &.nav-active {
      color: ${({ theme }) => theme.colors.yellow};
      text-decoration: overline;
    }
  }
  li {
    display: inline-block;
  }
  &.active {
    display: flex;
  }
  @media (max-width: 768px) {
    grid-row: 2 / 2;
    grid-column: 1 / 4;
    display: none;

    li {
      margin: 10px 0;
    }
  }
`
export const Profile = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.colors.neutral};
  font-size: 12px;
  grid-column: 3 / 3;

  button {
    font-size: 18px;
    border-radius: 6px;
  }
  .Hamburger {
    margin-left: 20px;
    cursor: pointer;
    font-size: 30px;
    display: none;
  }
  @media (max-width: 768px) {
    grid-column: 2 / 4;

    .Hamburger {
      display: block;
    }
  }
`

export const Avatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 65px;
  width: 65px;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.yellow};
  border: 2px solid ${({ theme }) => theme.colors.neutral};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  transition: 100ms;
`

export const DropDown = styled.div`
  display: none;
  // height: 80px;
  // width: 140px;
  position: absolute;
  padding: 20px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.lightGrey};
  border-radius: 6px;
  z-index: 2;
  top: 80px;

  &.activeAvatar {
    display: block;
  }

  h5 {
    margin-bottom: 10px;
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
  @media (max-width: 768px) {
    grid-row: 3 / 3;
    grid-column: 1 / 4;
  }
`
