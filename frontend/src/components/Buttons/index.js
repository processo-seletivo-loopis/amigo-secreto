import React from 'react'
import ButtonAddHome from '../ButtonAddHome'
import ButtonDrawHome from '../ButtonDrawHome';
import { Link } from 'react-router-dom'
import { StyledButtonsContainer, rightButton, leftButton} from './styles';

export default function Buttons({canDraw}) {
    return (
        <StyledButtonsContainer>
            <Link to="/addFriend">
                <ButtonAddHome position_size={canDraw ? leftButton : rightButton}/>
            </Link>
            {canDraw && <ButtonDrawHome position_size={rightButton} />}
        </StyledButtonsContainer>
    )
}
