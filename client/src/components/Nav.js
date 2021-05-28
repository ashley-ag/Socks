import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartLine,
  faSocks,
  faHome,
  faFolderPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Nav = () => {
  const { pathname } = useLocation();
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
              <Line
                transition={{ duration: 0.75 }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "50%" : "0%" }}
              />
            </li>
            <li>
              <Link to="/markets">
                <FontAwesomeIcon icon={faChartLine} />
                <Line
                  transition={{ duration: 0.75 }}
                  initial={{ width: "0%" }}
                  animate={{ width: pathname === "/markets" ? "50%" : "0%" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/addstocks">
                <FontAwesomeIcon icon={faFolderPlus} />
                <Line
                  transition={{ duration: 0.75 }}
                  initial={{ width: "0%" }}
                  animate={{ width: pathname === "/addstocks" ? "50%" : "0%" }}
                />
              </Link>
            </li>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faUser} />
                <Line
                  transition={{ duration: 0.75 }}
                  initial={{ width: "0%" }}
                  animate={{ width: pathname === "/login" ? "50%" : "0%" }}
                />
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
    padding-left: 2.5rem;
    padding-right: 2.5rem;
    color: blue;
    cursor: pointer;
    font-size: 2rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    #logo {
      padding-top: 1rem;
    }
    ul {
      padding: 1rem 2rem;
    }
    li {
      padding: 0rem 1rem;
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #a300a3;
  width: 0;
  position: absolute;
  bottom: -10%;
  left: 25%;
`;

export default Nav;
