import React from 'react'
import styled from 'styled-components'

const Main = () => {
    return (
        <Container>
            <h1>Join The <br />Team</h1>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 65px;
        line-height: 1;
        font-weight: 700;
        color: #343434;

        @media (max-width: 900px) {
            display: none;
        } 
    }
`

export default Main
