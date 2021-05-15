import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <div>
      <StyledNav>
        <h1 id="logo">Socks</h1>
        <div>
          <ul>
            <li>Dashboard</li>
            <li>Markets</li>
            <li>Add Stocks</li>
            <li>Login</li>
          </ul>
        </div>
      </StyledNav>
    </div>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  background: #252525;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
    justify-content: space-around;
    background: blue;
    list-style: none;
    padding: 2rem 10rem;
  }
`;

export default Nav;
