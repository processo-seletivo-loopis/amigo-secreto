import { useState } from 'react'
import ButtonAddHome from '../ButtonAddHome'
import ButtonDrawHome from '../ButtonDrawHome';
import Alert from '../Alert'
import Loading from '../Loading';
import { Link } from 'react-router-dom'
import { StyledButtonsContainer, rightButton, leftButton } from './styles';
import service from '../../services/friendsService';

export default function Buttons({ friends, canDraw, onRefresh }) {

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClick = async () => {
        setIsLoading(true);
        await service.postDraw();
        setIsLoading(false);
        setIsAlertOpen(true);
    }

    const handleClose = () => {
        onRefresh();
        setIsAlertOpen(false);
    }

    return (
        <StyledButtonsContainer>
            <Link to="/addFriend">
                <ButtonAddHome position_size={canDraw ? leftButton : rightButton} />
            </Link>
            {canDraw && <ButtonDrawHome onClick={handleClick} friends={friends} position_size={rightButton} />}
            {isLoading && <Loading />}
            <Alert type={4} isOpen={isAlertOpen} onClose={handleClose} />
        </StyledButtonsContainer>
    )
}
