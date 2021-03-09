import React from 'react'
import styled from 'styled-components';

const Img = styled.img`
    border-radius:5px;
    
`;
//UnsplashImage component
export const UnsplashImage = ({url,key}) => {
    return (
        <Img src = {url} key={key} alt="" className="img-fluid"/>
    );
        
};
