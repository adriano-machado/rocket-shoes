import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    padding: 30px;
    background: #fff;
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 480px) {
            flex-direction: column-reverse;
        }

        button {
            background: #7159c1;
            color: #fff;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover {
                background: ${darken(0.03, '#7159c1')};
            }

            @media (max-width: 480px) {
                margin-top: 10px;
            }
        }
    }
`;

export const ProductTable = styled.table`
    width: 100%;
    border-collapse: collapse;
    thead {
        @media (max-width: 480px) {
            display: none;
        }
    }
    thead th {
        color: #999;
        text-align: left;
        padding: 12px;
    }
    tbody tr {
        border-bottom: 1px solid #eee;
        @media (max-width: 480px) {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }

    tbody td {
        padding: 12px;
        @media (max-width: 480px) {
            padding: 6px;
            padding: 6px;
        }
    }
    td {
        @media (max-width: 480px) {
            strong {
                max-width: 85%;
                margin-right: 10px;
            }
            justify-content: center;
            align-items: center;
            text-align: center;
            flex-direction: row;
            span {
                max-width: 15%;
                color: #999;
                font-size: 13px;
                text-align: right;
            }
        }
    }
    img {
        height: 100px;
    }
    strong {
        display: block;
    }
    span {
        color: #999;
        margin-left: 5px;
        font-size: 14px;
        font-weight: bold;
    }
    div {
        display: flex;
        align-items: center;
        justify-content: center;
        input {
            border: 1px solid #ddd;
            border-radius: 4px;
            color: #666;
            padding: 6px;
            width: 50px;
            text-align: center;
            @media (max-width: 480px) {
                width: 36px;
            }
        }
    }
    button {
        background: none;
        border: 0;
        padding: 6px 8px;
        svg {
            @media (max-width: 480px) {
                width: 20px;
                height: 20px;
            }
        }
    }
`;
export const Total = styled.div`
    display: flex;
    align-items: baseline;

    span {
        color: #999;
        font-weight: bold;
        @media (max-width: 480px) {
            font-size: 22px;
        }
    }
    strong {
        font-size: 29px;
        margin-left: 5px;
    }
`;
