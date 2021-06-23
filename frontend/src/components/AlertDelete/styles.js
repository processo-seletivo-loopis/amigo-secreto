import styled from "styled-components";

const Message = styled.span`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
`

const ButtonDelete = styled.button`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    width: 166px;
    height: 55.33px;
    background: #FF6B35;
    border-radius: 4px;
    color: #FFFFFF;
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

export { Message, ButtonDelete, ButtonClose };