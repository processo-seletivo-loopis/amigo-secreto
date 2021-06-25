import { useState } from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import Alert from "../Alert";
import service from '../../services/friendsService';
import { register, register_add } from './styles';

export default function AddFriend() {

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [addAnother, setAddAnother] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleClickOnlyAdd = () => {
        setAddAnother(false);
    };

    const handleClickAddAndContinue = () => {
        setAddAnother(true);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await service.createFriend({
            name: name,
            email: email
        });
        setEmail("");
        setName("");
        setIsAlertOpen(true);
    }

    const handleClose = () => {
        setIsAlertOpen(false);
    }

    const handleChangeEmail = (value) => {
        setEmail(value);
    }

    const handleChangeName = (value) => {
        setName(value);
    }

    return (
        <form onSubmit={handleSubmit} >
            <InputName name={name} onChangeName={handleChangeName} />
            <InputEmail email={email} onChangeEmail={handleChangeEmail} />
            <Button onClick={handleClickOnlyAdd} position_size={register} text="CADASTRAR" />
            <Button onClick={handleClickAddAndContinue} position_size={register_add} text="CADASTRAR E ADICIONAR OUTRO" />
            <Alert onClose={handleClose} isOpen={isAlertOpen} addAnother={addAnother} />
        </form>
    );
}
