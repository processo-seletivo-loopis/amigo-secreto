import React from 'react'
import { Link } from 'react-router-dom';
import { FriendCard, Name, NameAndButtons, Email, DeleteIcon } from './styles'
import service from '../../services/friendsService';

export default function Friend({friend}) {

    //const [ isModalOpen, setIsModalOpen ] = useState(false);

    const handleClickDelete = () => {
        service.removeFriend(friend.id);
        //setIsModalOpen(true);
    };

    return (
        <FriendCard>
            <NameAndButtons>
                <Name>
                    {friend.name}
                </Name>
                <div style={{background: "inherit"}}>
                    <Link style={{background: "inherit"}} to={{
                            pathname: "/editFriend",
                            state: {
                                ...friend
                            }
                        }}>
                        <img style={{background: "inherit"}} src="editIcon.svg" alt="Icone Editar" />
                    </Link>
                    <DeleteIcon onClick={handleClickDelete} src="deleteIcon.svg" />
                </div>
            </NameAndButtons>
            <Email>
                {friend.email}
            </Email>
        </FriendCard>
    )
}
