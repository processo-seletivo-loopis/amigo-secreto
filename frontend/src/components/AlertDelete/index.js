import React, { useState } from 'react'
import { Message, ButtonDelete, ButtonClose } from './styles'
import service from '../../services/friendsService';

export default function AlertDelete({ friend, onCancel }) {

    const [isDeleted, setIsDeleted] = useState(false);

    const handleClickDelete = async () => {
        await service.removeFriend(friend.id);
        setIsDeleted(true);
    }

    const handleClickClose = () => {
        onCancel();
    }

    return (
        <div style={{
            position: "absolute",
            top: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            {isDeleted && <Message>
                Excluido com sucesso!
            </Message>}
            {!isDeleted && <Message>
                Deseja realmente excluir <span style={{ color: "#004E89" }}>{friend.name}</span> ?
            </Message>}
            <div style={isDeleted ? styles.isDeleted : styles.isNotDeleted}>
                {!isDeleted && <ButtonDelete onClick={handleClickDelete}>
                    Sim
                </ButtonDelete>}
                <ButtonClose onClick={handleClickClose}>
                    {isDeleted ? "Ok" : "Cancelar"}
                </ButtonClose>
            </div>
        </div>
    )
}

const styles = {
    isDeleted: {
        position: "absolute",
        top: "119px",
        width: "363px",
        display: "flex",
        justifyContent: "center"
    },
    isNotDeleted: {
        position: "absolute",
        top: "119px",
        width: "363px",
        display: "flex",
        justifyContent: "space-between"
    }
}