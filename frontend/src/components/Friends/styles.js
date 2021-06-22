import styled from 'styled-components';

const FriendsContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 354px;
    padding: 0 72px;
    top: 266px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const Obs = styled.span`
    position: absolute;
    width: 534px;
    height: 19px;
    left: 72px;
    top: 210px;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #FF6B35;
`

export { FriendsContainer, Obs };