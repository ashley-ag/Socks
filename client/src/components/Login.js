import React from "react";
import styled from "styled-components";
import Line from "./Line";
import { motion } from "framer-motion";
import { pageAnimation } from "../animations";

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;

  return (
    <motion.section
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      className="login"
    >
      <StyledDiv className="loginContainer">
        <label>Email</label>
        <input
          type="text"
          autoFocus
          required
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p className="errorMsg">{emailError}</p>
        <label>Password</label>
        <input
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="errorMsg">{passwordError}</p>
        <div className="btnContainer">
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Sign In</button>
              <p>
                Don't have an account?
                <span onClick={() => setHasAccount(!hasAccount)}> Sign Up</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleSignup}>Sign Up</button>
              <p>
                Have an account?
                <span onClick={() => setHasAccount(!hasAccount)}> Sign In</span>
              </p>
            </>
          )}
        </div>
        <Line />
      </StyledDiv>
    </motion.section>
  );
};

const StyledDiv = styled.div`
  min-height: 63vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  input {
    padding: 1rem 2rem;
    border-radius: 15px;
    margin: 1rem;
  }
  label {
    font-size: 2rem;
  }
  button {
    font-family: "Roboto", sans-serif;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    background: white;
    border: none;
    border-radius: 15px;
    color: #a300a3;
    transition: all ease 0.5s;
    cursor: pointer;
    margin: 2rem;
    &:hover {
      background: #a300a3;
      color: white;
    }
  }
  .btnContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      margin-top: 1rem;
    }
    span {
      cursor: pointer;
      color: #a300a3;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Login;
