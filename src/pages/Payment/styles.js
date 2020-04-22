import styled from 'styled-components';
import { darken } from 'polished';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding: 30px;
    background: #202020;
    border-radius: 4px;
    align-items: center;
    min-width: 500px;
    @media (max-width: 430px) {
        min-width: 300px;
    }

    button {
        background: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        overflow: hidden;
        margin-top: auto;
        align-items: center;
        transition: background 0.2s;
        height: 40px;
        justify-content: center;
        font-weight: bold;
        margin-top: 20px;

        width: 30%;
        @media (max-width: 430px) {
            width: 100%;
        }
        &:hover {
            background: ${darken(0.03, '#7159c1')};
        }
    }

    input {
        background: #353535;
        border: 1px solid rgba(255, 255, 255, 0.12);
        border-radius: 4px;
        height: 44px;
        padding: 0 15px;
        margin: 0 0 10px;
        width: 100%;
        color: rgba(255, 255, 255, 0.7);

        &::placeholder {
            color: rgba(255, 255, 255, 0.3);
        }
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
