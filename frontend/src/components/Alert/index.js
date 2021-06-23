import React from 'react'
import Modal from "react-modal";
import { Title } from './styles'
import AlertDelete from '../AlertDelete';
import AlertAdd from '../AlertAdd';
import AlertEdit from '../AlertEdit';
import styles from './styles.module.css'

Modal.setAppElement("#root");

export default function Alert({ type = 1, friend = {}, isOpen, onClose = {}, addAnother = false }) {

    const handleCancel = () => {
        onClose();
    }

    return (
        <Modal isOpen={isOpen} className={styles.modal} overlayClassName={styles.overlay}>
            <Title>AMIGO SECRETO LOOPIS</Title>
            {type === 1 &&
                <AlertAdd addAnother={addAnother} onCancel={handleCancel} />
            }
            {type === 2 &&
                <AlertDelete friend={friend} onCancel={handleCancel} />
            }
            {type === 3 &&
                <AlertEdit />
            }
        </Modal>
    )
}
