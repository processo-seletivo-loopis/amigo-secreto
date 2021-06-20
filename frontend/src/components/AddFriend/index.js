import React from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import { register, register_add } from './styles';

export default function AddFriend() {
    return (
        <form>
            <InputName />
            <InputEmail />
            <Button position_size={register} text="CADASTRAR" />
            <Button position_size={register_add} text="CADASTRAR E ADICIONAR OUTRO" />
        </form>
    );
}
