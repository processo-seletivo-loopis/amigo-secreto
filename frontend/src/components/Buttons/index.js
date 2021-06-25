import { useState } from 'react'
import ButtonAddHome from '../ButtonAddHome'
import ButtonDrawHome from '../ButtonDrawHome';
import Alert from '../Alert'
import { Link } from 'react-router-dom'
import { StyledButtonsContainer, rightButton, leftButton } from './styles';
import service from '../../services/friendsService';

export default function Buttons({ friends, canDraw }) {

    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleClick = () => {
        service.postDraw();
        console.log("sorteado");
        setIsAlertOpen(true);
    }

    const handleClose = () => {
        setIsAlertOpen(false);
    }

    return (
        <StyledButtonsContainer>
            <Link to="/addFriend">
                <ButtonAddHome position_size={canDraw ? leftButton : rightButton} />
            </Link>
            {canDraw && <ButtonDrawHome onClick={handleClick} friends={friends} position_size={rightButton} />}
            <Alert type={4} isOpen={isAlertOpen} onClose={handleClose} />
        </StyledButtonsContainer>
    )
}
