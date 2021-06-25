import styled from "styled-components";

const Message = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
`

const SmallMessage = styled.span`
    margin-top: 16px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
`

const ButtonClose = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    width: 166px;
    height: 55.33px;
    background: #004E89;
    border-radius: 4px;
    color: #FFFFFF;
`

export { Message, SmallMessage, ButtonClose };