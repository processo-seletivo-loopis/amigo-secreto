import React from 'react'
import Button from '../Button';
import {StyledButtonsContainer, button_add} from './styles';

export default function Buttons() {
    return (
        <StyledButtonsContainer>
            <Button position_size={button_add} text="ADICIONAR" />
        </StyledButtonsContainer>
    )
}
