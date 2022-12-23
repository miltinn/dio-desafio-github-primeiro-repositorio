import styled from 'styled-components';


export const ButtonContainer = styled.button`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.6;
        cursor:pointer;
    }

    &:disabled{
        border: 1px solid #999999;
        background-color: #81259D70;
        color: #FFFFFF60;
        cursor: not-allowed;
}
`