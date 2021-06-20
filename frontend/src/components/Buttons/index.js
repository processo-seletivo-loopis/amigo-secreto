import React from 'react'
import Button from '../Button';
import {StyledButtonsContainer, button_add} from './styles';

export default function Buttons() {
    return (
        <StyledButtonsContainer>
            <Button position={button_add} text="ADICIONAR" />
        </StyledButtonsContainer>
    )
}
