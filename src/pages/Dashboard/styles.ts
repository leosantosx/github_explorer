import styled from 'styled-components'
import { shade } from 'polished'

export const Title = styled.h1`
    font-size: 3rem;
    color: #3a3a3a;
    margin-top: 1.5em;
    max-width: 35vw;
    line-height: 1.3em;
`

export const Form = styled.form`
    max-width: 700px;
    display: flex;
    margin-top: 40px;

    input {
        flex: 1;
        height: 72px;
        border: 0;
        padding: 0 20px;
        border-radius: 5px 0 0 5px;
        color: #4d4d4d;
        font-size: 1.1rem;

        &:placeholder {
            color: #a8a8b3;
        }
    }

    button {
        height: 72px;
        width: 210px;
        background-color: #04d361;
        color: #ffffff;
        font-weight: bold;
        border: 0;
        border-radius: 0 5px 5px 0;
        transition: background-color 300ms;

        &:hover {
            background-color: ${shade(0.2, '#04d361')};
        }
    }
`

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        border-radius: 5px;
        background-color: #fff;
        display: block;
        width: 100%;
        padding: 24px;
        text-decoration: none;
        display: flex;
        align-items: center;
        transition: transform 200ms;

        & + a {
            margin-top: 16px;
        }

        &:hover {
            transform: translateX(10px);
        }
    }

    img {
        height: 80px;
        width: 80px;
        border-radius: 50%;
    }

    div {
        margin-left: 24px;

        strong {
            font-size: 24px;
            color: #3d3d3d;
            margin-bottom: 4px;
        }

        p {
            font-size: 18px;
            color: #a8a8b3;
        }
    }

    svg {
        margin-left: auto;
        color: #cbcbd6;
    }
`
