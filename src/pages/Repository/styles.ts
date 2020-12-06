import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #ababb3;
        transition: color 0.5s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`

export const RepositoryInfo = styled.section`
    header {
        margin-top: 80px;
        display: flex;
        align-items: center;

        img {
            border-radius: 50%;
            width: 120px;
            height: 120px;
            object-fit: cover;
        }

        div {
            margin-left: 25px;

            strong {
                font-size: 1.8rem;
                color: #3d3d4d;
            }

            p {
                margin-top: 5px;
                font-size: 1rem;
                color: #737380;
            }
        }
    }

    ul {
        max-width: 420px;
        margin: 40px 0;
        list-style: none;
        display: flex;
        justify-content: space-between;

        li {
            display: flex;
            flex-direction: column;

            strong {
                font-size: 1.8rem;
                color: #3d3d3d;
                margin-bottom: 4px;
            }

            span {
                font-size: 1.2rem;
                color: #6c6c80;
            }
        }
    }
`

export const Issues = styled.div`
    margin-top: 3em;

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

    div {
        flex: 1;

        strong {
            font-size: 24px;
            color: #3d3d3d;
            margin-bottom: 8px;
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
