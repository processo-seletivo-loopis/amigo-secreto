import React, { useState } from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import save from './styles';

export default function EditFriend({location}) {

    const fromFriend = location.state;

    const [name, setName] = useState(fromFriend.nome);
    const [email, setEmail] = useState(fromFriend.email);
    console.log(name);
    console.log(email);

    const handleSubmit = () => {};

    return (
        <form onSubmit={handleSubmit}>
            <InputName name={name} />
            <InputEmail email={email} />
            <Button position_size={save} text="SALVAR" />
        </form>
    );
}
