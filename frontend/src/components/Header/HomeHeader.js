import React from "react";
import { Button } from "../../styles/GlobalComponents/Button";
import {Link} from "react-router-dom"
import {FaSearch} from "react-icons/fa"



// styles
import { MainDiv } from "./HomeHeaderStyles";
import { Item1, Item2, Item3, Row1} from "./HomeHeaderStyles";


export default function HomeHeader() {
  return (
    <MainDiv>
      <Item1>
        
          <img src="/img/Logo-Transparent.svg" alt="Logo" />
          <h1>Madrid Waves</h1>
        
      </Item1>
      <Item2>
        
        <Link to="/create">Create</Link>
        <Link to="/myblogs">MyBlogs</Link>
        <Link to="/about">About</Link>
        
      </Item2>
      <Item3>
        <Button
          bg={({ theme }) => theme.colors.red}
          clr={({ theme }) => theme.colors.neutral}
        >
          Login/signup
        </Button>
      </Item3>

      <Row1>
        <input type="text" ></input>
        <Button
          bg ={({theme}) => theme.colors.red}
          clr={({theme}) => theme.colors.neutral}
          >
            Search <span><FaSearch/></span>
          </Button>
      </Row1>
    </MainDiv>
  );
}
