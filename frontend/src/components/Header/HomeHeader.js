import React,{useState}  from "react";
import { Button } from "../../styles/GlobalComponents/Button";
import { Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";

// styles
import {
  NavContainer,
  Logo,
  NavLinks,
  Profile,
  SearchBar,
} from "./HomeHeaderStyles";


export default function HomeHeader() {

  const [isOpen, setIsOpen] = useState();

  return (
    <NavContainer>
      <Logo>
        <img src="/img/Logo-Transparent.svg" alt="Logo" />
        <h1>Madrid Waves</h1>
      </Logo>
      <NavLinks className= {isOpen ? "active": ""}>
        <ul>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/myblogs">MyBlogs</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </NavLinks>
      <Profile>
        <Button
          bg={({ theme }) => theme.colors.red}
          clr={({ theme }) => theme.colors.neutral}
        >
          Login
        </Button>
        <FaBars className="Hamburger" onClick={()=> {
          setIsOpen(!isOpen)
          console.log("Testing ...")
        }} />
      </Profile>

      <SearchBar>
        <input type="text"></input>
        <Button
          bg={({ theme }) => theme.colors.red}
          clr={({ theme }) => theme.colors.neutral}
        >
          Search
          <span>
            <FaSearch />
          </span>
        </Button>
        
      </SearchBar>
    </NavContainer>
  );
}
