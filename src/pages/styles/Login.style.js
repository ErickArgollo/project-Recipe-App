import styled from 'styled-components';

export const loginStyle = styled.div`
height: 460px;
width: 262px;

display: flex;
position: absolute;
text-align: center;
align-items: center;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`;

export const Warning = styled.div`
position: relative;
top: 3px;
margin-left: 5px
`

export const formLoginContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
position: relative;
top: 3px;
height: 466px;
justify-content: center;
`;

export const imgsContainer = styled.div`
height: 235px;
background: #41197F;
position: relative;
z-index: 1;
`;

export const inputMailContainer = styled.div`
display: flex;
align-items: center;
gap: 2px;
`

export const logo = styled.img`
width: 240px;
position: relative;
top: 1px;
right: -8px;
`;

export const tomate = styled.img`
position: relative;
top: -60px;
right: 41px;
width: 180px;
`;

export const inputContainer = styled.div`
height: 235px;
width: 100%;
position: relative;
padding-top: 65px;
display: flex;
flex-direction: column;
align-items: center;
gap: 14px;
background-color: white;
`;

export const inputMailAndPassword = styled.input`
    border-radius: 5px;
    border: 0.5px solid #41197F;
    height: 40px;
    z-index: 3;
    color: #41197F;
 ::placeholder {
    color: #41197F;
    text-align: center;
    font-weight: 300;
    font-size: 14px;
 }
`;

export const loginBtn = styled.button`
    background: #FCC436;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    color: white;
    font-weight: 700;
    width: 205px;
    height: 35px;
    border: none;

:hover:enabled {
    cursor: pointer;
    border: 1px solid black;
}

:disabled {
    background-color: grey;
    cursor: auto;
}

`;
