import React from 'react'
import Friend from '../Friend'
import { FriendsContainer, Obs }from './styles'

export default function Friends({friends}) {
    return (
        <div>
            <Obs>
                OBS: o amigo secreto só pode ocorrer com no mínimo 3 pessoas.
            </Obs>
            <FriendsContainer>
                {friends.map((friend)=>{
                    return <Friend key={friend.id} friend={friend} />
                })}
            </FriendsContainer>
        </div>
    )
}
