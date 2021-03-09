import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    max-width:70rem;
    margin: 2rem auto;
    text-align: center;
    color:#00f20d;
    text-shadow: 1px 1px;
`;
//Header component
export const Header = () => {
    return (
        <HeaderStyle>
            <h1>Photo Gallery</h1>
            <h5>Yellow class Assignment - Created By Dineshkumar</h5>
        </HeaderStyle>
    )
}
