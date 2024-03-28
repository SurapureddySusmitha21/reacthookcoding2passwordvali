// Style your elements here
import styled from 'styled-components'

export const Bgcontainer = styled.div`
background-image:linear-gradient(to bottom,#24263c,#383a4e);
background-size:cover;
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:Center;
`
export const PasswordValidContainer = styled.div`
background-color:#475569;
height:50vh;
width:60%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`

export const PasswordHeading = styled.h1`
color: #ffffff;
font-size:46px;
font-family:"Roboto";
font-weight:bold;

`
export const PasswordParagraph = styled.p`
color: white;
font-size:20px;
font-family:"Roboto";

`
export const PasswordInput = styled.input`
width:50%;
border-color:transperent;
padding:9px;
`
export const PasswordErrorParagraph = styled.p`
color: red;
font-size:20px;
font-family:"Roboto";
`
