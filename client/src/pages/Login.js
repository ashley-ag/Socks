import React from "react";
import styled from 'styled-components';

const Login = () => {
  return (
    <div>
      <StyledH1>Login</StyledH1>

      <StyledLoginDiv>

        <input id='emailLogin'
          placeholder={'Email'}>

        </input>

        <br></br>
        <br></br>
        <input id='passLogin' placeholder={'Password'}>

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
        <button id='button'>Sign-Up</button>
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
#emailLogin{
  border-radius:5px;
  height:25px;
  width:200px;
};
#passLogin{
border-radius:5px;
  height:25px;
  width:200px;
}
#button{
  width:50px;
  height:25px;
  border-radius:7px;
  margin-top:20px;
    color:purple;
    background:white;
    transition: all ease 0.5s;
    cursor:pointer;
    &:hover{
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
  width:65px;
  height:25px;
  border-radius:7px;
  margin-top:25px;
    color:purple;
    background:white;
    transition: all ease 0.5s;
    cursor:pointer;
    &:hover{
      color:white;
      background:purple;

    };
  };
`;


export default Login;
