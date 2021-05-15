import React from "react";
import styled from 'styled-components';

const Login = () => {
  return (
    <StyledDiv>
      <img src={require()} alt={'logo'}></img>
      <h2 className='logHeader'>Login</h2>
      <input
        placeholder={'Email'}>

      </input>

      <input placeholder={'Password'}>

      </input>



    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  
  `

export default Login;
