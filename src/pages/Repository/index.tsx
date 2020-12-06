import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { FiChevronLeft } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo } from './styles'

interface RequestParams {
    repo: string
}
const Repository: React.FC = () => {
    const { params } = useRouteMatch<RequestParams>()

    return (
        <>
            <Header>
                <img src={logoImg} alt="Logo github" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            <RepositoryInfo>
                <header>
                    <img
                        src="https://leosantos.tech/img/profile.jpg"
                        alt="Foto do github"
                    />

                    <div>
                        <strong>leosantosx/repo</strong>
                        <p>Descrição do repositório</p>
                    </div>
                </header>

                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>67</strong>
                        <span>Issues Abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
        </>
    )
}

export default Repository
