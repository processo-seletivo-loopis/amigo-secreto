import React from 'react'
import StyledDiv from './styles'
import Spinner from 'react-bootstrap/Spinner';

export default function Loading() {
    return (
        <StyledDiv>
            <Spinner animation="border" />
            <span style={{ paddingTop: "10px" }}>Realizando Sorteio, por favor permaneça nessa página!</span>
        </StyledDiv>
    )
}
