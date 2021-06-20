import React from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import save from './styles';

export default function EditFriend() {
    return (
        <form>
            <InputName />
            <InputEmail />
            <Button position_size={save} text="SALVAR" />
        </form>
    );
}
