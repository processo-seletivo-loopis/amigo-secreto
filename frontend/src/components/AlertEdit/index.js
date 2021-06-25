import React from 'react'
import { Link } from 'react-router-dom';
import { Message, ButtonClose } from './styles';

export default function AlertEdit() {

    return (
        <div style={{
            position: "absolute",
            top: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <Message>
                Salvo com sucesso!
            </Message>
            <div style={{
                position: "absolute",
                top: "119px",
                width: "363px",
                display: "flex",
                justifyContent: "center"
            }}>
                <Link to="/">
                    <ButtonClose>
                        Ok
                    </ButtonClose>
                </Link>
            </div>
        </div>
    )
}