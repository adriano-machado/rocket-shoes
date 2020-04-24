import styled from 'styled-components';

import { darken } from 'polished';

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    @media (max-width: 945px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 490px) {
        grid-template-columns: repeat(1, 1fr);
    }

    li {
        display: flex;
        flex-direction: column;
        background: #fff;
        border-radius: 4px;
        padding: 20px;
        &:hover img {
            opacity: 0.9;
        }
        img {
            margin: auto;

            align-self: center;
            max-width: 250px;
            transition: opacity 150ms ease-in-out;
        }

        > strong {
            font-size: 16px;
            line-height: 20px;
            color: #333;
            margin-top: 5px;
        }
        > span {
            font-size: 21px;
            font-weight: bold;
            margin: 5px 0 20px;
        }

        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            overflow: hidden;
            margin-top: auto;
            display: flex;
            align-items: center;
            transition: background 0.2s;
            height: 40px;
            justify-content: center;

            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }

            div {
                display: flex;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }
`;
