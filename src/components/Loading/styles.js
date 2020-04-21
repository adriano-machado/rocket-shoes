import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg)
    }
`;

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    width: 52.8px;
    svg {
        animation: ${rotate} 2s linear infinite;
    }
`;
