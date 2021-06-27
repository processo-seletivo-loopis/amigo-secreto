import { useState } from 'react'
import InputName from '../InputName';
import InputEmail from '../InputEmail';
import Button from '../Button';
import Alert from "../Alert";
import service from '../../services/friendsService';
import { EmailError, register, register_add } from './styles';

export default function AddFriend() {

    const [isAlertOpen, setIsAlertOpen] = useState(false);
    const [addAnother, setAddAnother] = useState(false);
    const [hasError, setHasError] = useState(false);
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
        try {
            await service.createFriend({
                name: name,
                email: email
            });
            setHasError(false);
            setEmail("");
            setName("");
            setIsAlertOpen(true);
        } catch (err) {
            setHasError(true);
        }
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
            {hasError && <EmailError>*Email ja cadastrado, por favor informe outro email.</EmailError>}
            <Button onClick={handleClickOnlyAdd} position_size={register} text="CADASTRAR" />
            <Button onClick={handleClickAddAndContinue} position_size={register_add} text="CADASTRAR E ADICIONAR OUTRO" />
            <Alert onClose={handleClose} isOpen={isAlertOpen} addAnother={addAnother} />
        </form>
    );
}
