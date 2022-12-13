import styled from 'styled-components';

export const loadingContainer = styled.div`
height: 460px;
width: 262px;
display: flex;
align-items: center;
background-color: white;
`

export const loading = styled.div`
 @keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to { 
        transform: rotate(360deg);
    }
}
 
 @-webkit-keyframes rotate {
    from {
        -webkit-transform: rotate(0deg);
    }
    to { 
        -webkit-transform: rotate(360deg);
    }
}
	width: 60px;
	height: 60px;
	margin: 0 auto;
    position: relative;
	border:solid 10px #41197F;
	border-radius: 50%;
	border-right-color: transparent;
	border-bottom-color: transparent;
	 -webkit-transition: all 0.5s ease-in;
    -webkit-animation-name:             rotate; 
    -webkit-animation-duration:         1.0s; 
    -webkit-animation-iteration-count:  infinite;
    -webkit-animation-timing-function: linear;
    	
    	 transition: all 0.5s ease-in;
    animation-name:             rotate; 
    animation-duration:         1.0s; 
    animation-iteration-count:  infinite;
    animation-timing-function: linear; 

`