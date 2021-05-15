import React from "react";
import styled from 'styled-components';

const Login = () => {
  return (
    <div>
      <img alt={'logo'}></img>
      <StyledH1>Login</StyledH1>

      <StyledLoginDiv>

        <input
          placeholder={'Email'}>

        </input>

        <br></br>
        <br></br>
        <input placeholder={'Password'}>

        </input>
        <br></br>
        <button id={'button'}>Login</button>
      </StyledLoginDiv>

      <StyledSignUpDiv>
        <StyledSignH1>Sign-Up</StyledSignH1>
        <input placeholder={'Username'}>

        </input>
        <br></br>
        <br></br>
        <input
          placeholder={'Email'}>

        </input>

        <br></br>
        <br></br>
        <input placeholder={'Password'}>

        </input>
        <br></br>
        <button id={'button'}>Sign-Up</button>
      </StyledSignUpDiv>

    </div>
  );
};

const StyledH1 = styled.h1`
  color:white;
  text-align:center;
  margin-top:50px;
  `;

const StyledLoginDiv = styled.div`
text-align:center;
margin-top:25px;
#button{
  margin-top:20px;
    color:purple;
    background:white;
    transition: all ease 0.5s
    }
    #button::hover{
      color:white;
      background:purple;

    }
  }
    }
`;

const StyledSignH1 = styled.h1`
color:white;
  text-align:center;
  margin-top:20px;
  margin-bottom:30px;
`;

const StyledSignUpDiv = styled.div`
text-align:center;
margin-top:90px;
#button{
  margin-top:25px;
    color:purple;
    background:white;
    transition: all ease 0.5s
    &:hover{
      color:white;
      background:purple;

    }
  }
`;


export default Login;
