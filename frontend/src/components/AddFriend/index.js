import React from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import {Form, register, register_add} from './styles';

export default function AddFriend() {
    return (
        <Form>
            <InputName />
            <InputEmail />
            <Button position={register} text="CADASTRAR" />
            <Button position={register_add} text="CADASTRAR E ADICIONAR OUTRO" />
        </Form>
    );
}
