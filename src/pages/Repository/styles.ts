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
