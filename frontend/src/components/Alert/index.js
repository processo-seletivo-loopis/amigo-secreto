import React from 'react'
import Modal from "react-modal";
import { Title } from './styles'
import AlertDelete from '../AlertDelete';
import styles from './styles.module.css'

Modal.setAppElement("#root");

export default function Alert({ type = 1, friend, isOpen, onClose }) {

    const handleCancel = () => {
        onClose();
    }

    return (
        <Modal isOpen={isOpen} className={styles.modal} overlayClassName={styles.overlay}>
            <Title>AMIGO SECRETO LOOPIS</Title>
            {type === 2 &&
                <AlertDelete friend={friend} onCancel={handleCancel} />
            }
        </Modal>
    )
}
