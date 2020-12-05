import React, { useState, FormEvent, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiChevronRight } from 'react-icons/fi'
import api from '../../services/api'

import LogoGitHub from '../../assets/logo.svg'
import { Title, Form, Repositories, Error } from './styles'

interface Repository {
    full_name: string
    description: string
    owner: {
        login: string
        avatar_url: string
    }
}

const Dashboad: React.FC = () => {
    const [newRepo, setNewRepo] = useState('')

    const [inputError, setInputError] = useState('')

    const [repositories, setRepositories] = useState<Repository[]>(() => {
        const storagedRepositories = localStorage.getItem(
            '@githubExplorer:repositories',
        )

        if (storagedRepositories) {
            return JSON.parse(storagedRepositories)
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem(
            '@githubExplorer:repositories',
            JSON.stringify(repositories),
        )
    }, [repositories])

    async function handleAddRepository(event: FormEvent): Promise<void> {
        event.preventDefault()

        if (!newRepo) {
            setInputError('Digite o autor/nome do repositório')
            return
        }

        try {
            const response = await api.get<Repository>(`repos/${newRepo}`)
            const repository = response.data

            setRepositories([...repositories, repository])

            setNewRepo('')
            setInputError('')
        } catch {
            setInputError('Erro ao buscar repositório')
        }
    }

    return (
        <>
            <img src={LogoGitHub} alt="Logo GitHub Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form hasError={!!inputError} onSubmit={handleAddRepository}>
                <input
                    value={newRepo}
                    onChange={e => setNewRepo(e.target.value)}
                    type="text"
                    placeholder="Digite o nome do repositório"
                />
                <button type="submit">Pesquisar</button>
            </Form>

            {inputError && <Error>{inputError}</Error>}

            <Repositories>
                {repositories.map(repository => (
                    <Link
                        key={repository.full_name}
                        to={`repo/${repository.full_name}`}
                    >
                        <img
                            src={repository.owner.avatar_url}
                            alt={repository.owner.login}
                        />
                        <div>
                            <strong>{repository.full_name}</strong>
                            <p>{repository.description}</p>
                        </div>

                        <FiChevronRight size={20} />
                    </Link>
                ))}
            </Repositories>
        </>
    )
}

export default Dashboad
