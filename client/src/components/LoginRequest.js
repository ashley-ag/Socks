import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const LoginRequest = () => {
    return (
        <div>

            <div>
                <Styledh2>Welcome to Socks</Styledh2>
                <StyledP>Socks is a web-based application that allows a user to sign into their account, log their current stock units and cryptocurrency shares. Socks is a great choice for new and experienced investors alike. With an auto-populating, personalized dashboard showing infographics depicting the current value of your personalized market standings, this app brings simple viewings to your ever-so complicated investment portfolio. Join the millions of people using the socks.com app every day to stay on top of global financial markets.</StyledP>

                <Styledh3>To continue please login or signup!
<br></br>
                    <Link to='/login'>
                        <button id={"button1"} path='/'>Login</button>
                    </Link>
                </Styledh3>
            </div>

        </div>
    )
}

const Styledh2 = styled.h2`
text-align:center;
margin-top:32px;
color:white;
margin-bottom:30px;

`;
const StyledP = styled.p`
text-align:center;
color:white;
margin-right:60px;
margin-left:60px;

`;

const Styledh3 = styled.h3`
text-align: center;
margin-top:50px;
color:#A300A3;
#button1{
margin-top:25px;
color:#A300A3;
background:white;
transition: all ease 0.5s;
padding: 1rem 2rem;
cursor:pointer;
border-radius:15px;
border:none;
font-family: 'Roboto', sans-serif;
font-size:1.2rem;
&:hover{
    color:white;
    background:purple;
}
}
`;


export default LoginRequest;