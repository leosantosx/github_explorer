import React, { useEffect, useState } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import api from '../../services/api'

import logoImg from '../../assets/logo.svg'
import { Header, RepositoryInfo, Issues } from './styles'

interface RequestParams {
    repo: string
}

interface Repository {
    stargazers_count: number
    forks_count: number
    open_issues_count: number
    description: string
    full_name: string
    owner: {
        avatar_url: string
    }
}

interface Issues {
    id: number
    html_url: string
    title: string
    user: {
        login: string
    }
}

const Repository: React.FC = () => {
    const [repository, setRepository] = useState<Repository | null>(null)
    const [issues, setIssues] = useState<Issues[]>([])

    const { params } = useRouteMatch<RequestParams>()

    useEffect(() => {
        api.get(`repos/${params.repo}`).then(response =>
            setRepository(response.data),
        )

        api.get(`repos/${params.repo}/issues`).then(response =>
            setIssues(response.data),
        )
    }, [params.repo])

    return (
        <>
            <Header>
                <img src={logoImg} alt="Logo github" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
            </Header>

            {repository && (
                <RepositoryInfo>
                    <header>
                        <img
                            src={repository.owner.avatar_url}
                            alt="Foto do github"
                        />

                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository?.description}</p>
                        </div>
                    </header>

                    <ul>
                        <li>
                            <strong>{repository.stargazers_count}</strong>
                            <span>Stars</span>
                        </li>
                        <li>
                            <strong>{repository.forks_count}</strong>
                            <span>Forks</span>
                        </li>
                        <li>
                            <strong>{repository.open_issues_count}</strong>
                            <span>Issues Abertas</span>
                        </li>
                    </ul>
                </RepositoryInfo>
            )}

            <Issues>
                {issues.map(issue => (
                    <a key={issue.id} target="blank" href={issue.html_url}>
                        <div>
                            <strong>{issue.title}</strong>
                            <p>{issue.user.login}</p>
                        </div>
                        <FiChevronRight size={20} />
                    </a>
                ))}
            </Issues>
        </>
    )
}

export default Repository
