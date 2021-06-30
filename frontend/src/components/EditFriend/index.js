import React, { useState } from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import Alert from '../Alert';
import service from '../../services/friendsService';
import { save, EmailError } from './styles';

export default function EditFriend({ location }) {

    const fromFriend = location.state;

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [name, setName] = useState(fromFriend.name);
    const [email, setEmail] = useState(fromFriend.email);
    const [hasError, setHasError] = useState(false);

    const handleChangeEmail = (value) => {
        setEmail(value);
    }

    const handleChangeName = (value) => {
        setName(value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = {
                name: name,
                email: email
            };
            await service.updateFriend(fromFriend.id, formData);
            setHasError(false);
            setIsAlertOpen(true);
        } catch (err) {
            setHasError(true);
        }
    }

    const handleClick = () => { };

    return (
        <form onSubmit={handleSubmit}>
            <InputName name={name} onChangeName={handleChangeName} />
            <InputEmail email={email} onChangeEmail={handleChangeEmail} />
            {hasError && <EmailError>*Email ja cadastrado, por favor informe outro email.</EmailError>}
            <Button onClick={handleClick} position_size={save} text="SALVAR" />
            <Alert type={3} isOpen={isAlertOpen} />
        </form>
    );
}
