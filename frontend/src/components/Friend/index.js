import React from 'react'
import { Link } from 'react-router-dom';
import { FriendCard, Name, NameAndButtons, Email, DeleteIcon } from './styles'

export default function Friend({ friend, onDelete }) {

    const handleClickDelete = () => {
        onDelete(friend);
    };

    return (
        <div>
            <FriendCard>
                <NameAndButtons>
                    <Name>
                        {friend.name}
                    </Name>
                    <div style={{ background: "inherit" }}>
                        <Link style={{ background: "inherit" }} to={{
                            pathname: "/editFriend",
                            state: {
                                ...friend
                            }
                        }}>
                            <img style={{ background: "inherit", paddingTop: "11px" }} src="editIcon.svg" alt="Icone Editar" />
                        </Link>
                        <DeleteIcon onClick={handleClickDelete} src="deleteIcon.svg" />
                    </div>
                </NameAndButtons>
                <Email>
                    {friend.email}
                </Email>
            </FriendCard>
        </div>
    )
}
