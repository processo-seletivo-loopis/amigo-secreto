import React from 'react'
import { Message, SmallMessage, ButtonClose } from './styles';

export default function AlertDraw({ onCancel }) {

    const handleClick = () => {
        onCancel();
    }

    return (
        <div style={{
            position: "absolute",
            top: "110px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Message>
                Sorteio realizado com sucesso!
            </Message>
            <SmallMessage>
                Os participantes serão notificados por email.
            </SmallMessage>
            <div style={{
                position: "absolute",
                top: "103px",
                width: "363px",
                display: "flex",
                justifyContent: "center"
            }}>
                <ButtonClose onClick={handleClick}>
                    Ok
                </ButtonClose>
            </div>
        </div>
    )
}