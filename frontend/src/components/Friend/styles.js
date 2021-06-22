import styled from 'styled-components';

const FriendCard = styled.div`
    width: 350px;
    height: 150px;
    display: flex;
    flex-direction: column;
    background: #F5F5F5;
    border-radius: 4px;
`

const Name = styled.span`
    background: inherit;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 35px;
    color: rgba(0, 0, 0, 0.9);
`

const NameAndButtons = styled.div`
    background: inherit;
    display: flex;
    justify-content: space-between;
    padding: 19px 36px;
`

const Email = styled.span`
    background: inherit;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    margin-top: 26px;
    padding-left: 36px;
    line-height: 28px;
`

const DeleteIcon = styled.img.attrs(props => ({
    src: props.src,
}))`
    background: inherit;
    margin-left: 22px;
    padding-top: 11px;
    &:hover {
        cursor: pointer;
    }
`

export { FriendCard, Name, NameAndButtons, Email, DeleteIcon };