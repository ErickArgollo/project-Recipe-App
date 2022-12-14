import styled from 'styled-components';

export const header = styled.header`
background: #FCDC36;
height: 52px;
`;

export const topBar = styled.div`
display: flex;
align-items: center;
justify-content: center;
padding-top: 7px;
`;

export const iconRecipe = styled.img`
`;

export const headerLogo = styled.img`
width: 175px;

`;

export const buttonSearch = styled.button`
background: #FCDC36;
border: none;
:hover {
  transform: translateY(1px);
}
`;

export const searchIcon = styled.span`
color: #41197F;
position: relative;
top: 5px;
font-size: 30px;
:hover {
  transform: translateY(1px);
}

`;

export const buttonProfile = styled.button`
background: #FCDC36;
position: relative;
top: 5px;
border: none;
:hover {
  transform: translateY(1px);
}
`;

export const profileIcon = styled.span`
color: #41197F;
:hover {
  transform: translateY(1px);
}
font-size: 30px;
`;

export const searchBarContainer = styled.div`
/* height: 300px; */
display: flex;
align-items: center;

`;
