import styled from "styled-components";

const StyledButton = styled.button`
    background: #004e89;
    border-radius: 4px;
    color: #ffffff;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    position: absolute;
    width: ${props => props.position.width};
    height: ${props => props.position.height};
    left: ${props => props.position.left};
    top: ${props => props.position.top};
`

export default StyledButton;