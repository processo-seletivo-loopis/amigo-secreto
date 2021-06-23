import React, { useState } from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import Alert from '../Alert';
import service from '../../services/friendsService';
import save from './styles';

export default function EditFriend({ location }) {

    const fromFriend = location.state;

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [name, setName] = useState(fromFriend.name);
    const [email, setEmail] = useState(fromFriend.email);

    const handleChangeEmail = (value) => {
        setEmail(value);
    }

    const handleChangeName = (value) => {
        setName(value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = {
            name: name,
            email: email
        };
        service.updateFriend(fromFriend.id, formData);
        setIsAlertOpen(true);
    }

    const handleClick = () => { };

    return (
        <form onSubmit={handleSubmit}>
            <InputName name={name} onChangeName={handleChangeName} />
            <InputEmail email={email} onChangeEmail={handleChangeEmail} />
            <Button onClick={handleClick} position_size={save} text="SALVAR" />
            <Alert type={3} isOpen={isAlertOpen} />
        </form>
    );
}
