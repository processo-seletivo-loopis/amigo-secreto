import { useState } from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import { register, register_add } from './styles';

export default function AddFriend() {

    const [isAlertOpen, setIsAlertOpen] = useState(false);

    const handleClickOnlyAdd = () => {
        setIsAlertOpen(true);
    };

    const handleClickAddAndContinue = () => {
        setIsAlertOpen(true);
    };

    const handleClose = () => {
        setIsAlertOpen(false);
    }

    return (
        <form>
            <InputName />
            <InputEmail />
            <Button onClick={handleClickOnlyAdd} position_size={register} text="CADASTRAR" />
            <Button onClick={handleClickAddAndContinue} position_size={register_add} text="CADASTRAR E ADICIONAR OUTRO" />
        </form>
    );
}
