import styled from "styled-components"

export const NavContainer = styled.header`
  display: grid;
  background: rgb(0, 71, 151);
  background: radial-gradient(circle, ${({ theme }) => theme.colors.header});
  padding-top: 1rem;
  padding-bottom: 3rem;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`
export const Logo = styled.nav`
  grid-column: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center; /* for single line flex container */
  align-content: center; /* for multi-line flex container */
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
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
  align-items: center;
  align-content: center;
  color: ${({ theme }) => theme.colors.white};
  grid-column: 2 / 2;

  a {
    padding: 0 20px;
    color: ${({ theme }) => theme.colors.white};
    font-size: 20px;

    &:hover {
      text-decoration: overline;
    }

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
  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  grid-column: 3 / 3;

  button {
    font-size: 18px;
    border-radius: 6px;
  }
  .Hamburger {
    margin: 0 20px;
    cursor: pointer;
    font-size: 30px;
    display: none;
    path {
      stroke: white;
    }
  }
  .bulbOn,
  .bulbOff {
    margin-right: 20px;
    font-size: 30px;
    cursor: pointer;
    transition: transform 100ms ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
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
  border: 2px solid ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
`

export const DropDown = styled.div`
  display: none;
  position: absolute;
  padding: 20px;
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  z-index: 2;
  top: 80px;
  right: 0;

  &.activeAvatar {
    display: block;
  }

  button {
    width: 100%;
    margin: 10px 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
  }

  path {
    stroke: white;
  }

  h5 {
    margin-bottom: 10px;
  }
`

export const SearchBar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-row: 2 / 2;
  grid-column: 2 / 2;

  @media (max-width: 768px) {
    grid-row: 3 / 3;
    grid-column: 1 / 4;
  }
`

export const SearchBarContent = styled.form`
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  padding: 5px 0px;
  border-radius: 6px;

  input {
    width: 400px;
    border-radius: 5px 0 0 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.text};
    border: None;
    outline: None;
    padding: 11px 20px;
  }

  span {
    padding-left: 30px;
  }

  @media (max-width: 768px) {
    input {
      width: clamp(350px, 50%, 500px);
    }
  }
`
