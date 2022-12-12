import styled from 'styled-components';

export const detailsContainer = styled.div`
height: 460px;
width: 262px;
position: absolute;
background-color: white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
overflow-y: scroll;
::-webkit-scrollbar {
  display: none;
}
`;

export const linkCopied = styled.span`
color: #FCC436;
font-size: 12px;
position: absolute;
bottom: 12px;
font-weight: 700;
right: 40px;
top: 0;
text-align: center;
`;

export const shareFavContainer = styled.div`
position: absolute;
top: 0;
right: 0;
z-index: 2;
background-color: transparent;
filter: contrast(200%)
`;

export const shareBtn = styled.button`
background-color: transparent;
border-color: transparent;
color: #FCC436;

`;

export const shareIcon = styled.p`
color: #FCC436;
background-color: transparent;
font-size: 30px;

`;

export const favoriteBtn = styled.button`
background-color: transparent;
border-color: transparent;
`;

export const favIcon = styled.span`
font-size: 30px;
opacity: 0.8;
`;

export const recommendationTitle = styled.h2`
text-align: center;
margin-top: 15px;
color: #41197F;
font-size: 1.7em;
font-weight: 700;
`;

export const caroussel = styled.div`
display: flex;
overflow-x: scroll;
::-webkit-scrollbar{
    background-color: #FCC436;
    height: 7px;
    cursor: pointer;
}

::-webkit-scrollbar-thumb{
    background-color: #41197F;
    cursor: pointer;
}

`;

export const startBtn = styled.button`
background: #FCC436;
border-radius: 5px;
height: 42px;
width: 100%;
margin: auto;
display: flex;
margin-top: 20px;
position: sticky;
bottom: 0;
justify-content: center;
align-items: center;
font-weight: 700;
font-size: 14px;
color: white;
letter-spacing: 0.03em;
text-transform: uppercase;
`;
