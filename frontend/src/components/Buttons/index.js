import React from 'react'
import Button from '../Button';
import { Link } from 'react-router-dom'
import {StyledButtonsContainer, button_add} from './styles';

export default function Buttons() {
    return (
        <StyledButtonsContainer>
            <Link to="/addFriend">
                <Button position_size={button_add} text="ADICIONAR" />
            </Link>
        </StyledButtonsContainer>
    )
}
