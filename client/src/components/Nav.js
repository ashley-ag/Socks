import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSocks,
  faHome,
  faFolderPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div>
      <StyledNav>
        <h1 id="logo">
          <Link to="/">
            Socks <FontAwesomeIcon icon={faSocks} />
          </Link>
        </h1>
        <div>
          <ul>
            <li>
              <Link to="/">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li>
              <Link to="/markets">
                <FontAwesomeIcon icon={faChartLine} />
              </Link>
            </li>
            <li>
              <Link to="/addstocks">
                <FontAwesomeIcon icon={faFolderPlus} />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </li>
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
  #logo {
    font-size: 2rem;
    margin-left: 2rem;
    color: white;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover {
      color: #a300a3;
    }
  }
  ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 2rem 10rem;
  }
  li {
    padding-left: 5rem;
    color: white;
    cursor: pointer;
    font-size: 2rem;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    #logo {
      padding-top: 1rem;
    }
    ul {
      padding: 2rem 1rem;
    }
    li {
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }
`;

export default Nav;
