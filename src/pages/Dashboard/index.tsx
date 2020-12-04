import React from 'react'
import { FiChevronRight } from 'react-icons/fi'

import LogoGitHub from '../../assets/logo.svg'

import { Title, Form, Repositories } from './styles'

const Dashboad: React.FC = () => {
    return (
        <>
            <img src={LogoGitHub} alt="Logo GitHub Explorer" />
            <Title>Explore repositórios no Github</Title>
            <Form>
                <input type="text" placeholder="Digite o nome do repositório" />
                <button type="button">Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://leosantos.tech/img/profile.jpg"
                        alt="avatar"
                    />
                    <div>
                        <strong>leosantosx</strong>
                        <p>Descrição do repo</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://leosantos.tech/img/profile.jpg"
                        alt="avatar"
                    />
                    <div>
                        <strong>leosantosx</strong>
                        <p>Descrição do repo</p>
                    </div>

                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    )
}

export default Dashboad
