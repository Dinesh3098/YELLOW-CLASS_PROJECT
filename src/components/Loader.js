import React from 'react'
import styled from 'styled-components';

const Loading =styled.div`
text-align:center;
.lds-hourglass {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-hourglass:after {
    content: " ";
    display: block;
    border-radius: 50%;
    width: 0;
    height: 0;
    margin: 8px;
    box-sizing: border-box;
    border: 32px solid #fff;
    border-color:  #00f20d transparent  #00f20d transparent;
    animation: lds-hourglass 1.6s infinite;
  }
  @keyframes lds-hourglass {
    0% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }
    50% {
      transform: rotate(900deg);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    }
    100% {
      transform: rotate(1800deg);
    }
  }
  
`;
//Loader component
export const Loader = () => {
    return (
        <Loading>
            <div class="lds-hourglass"></div>
        </Loading>
    )
}
