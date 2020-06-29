import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/50037292?s=460&u=c9143ea90d7f81261eba361280672ea210469aa4&v=4"
          alt="Gabriel Prando"
        />

        <div>
          <strong>gprando/guia_git</strong>
          <p>Um guia rápido e funcional de git</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/50037292?s=460&u=c9143ea90d7f81261eba361280672ea210469aa4&v=4"
          alt="Gabriel Prando"
        />

        <div>
          <strong>gprando/guia_git</strong>
          <p>Um guia rápido e funcional de git</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/50037292?s=460&u=c9143ea90d7f81261eba361280672ea210469aa4&v=4"
          alt="Gabriel Prando"
        />

        <div>
          <strong>gprando/guia_git</strong>
          <p>Um guia rápido e funcional de git</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/50037292?s=460&u=c9143ea90d7f81261eba361280672ea210469aa4&v=4"
          alt="Gabriel Prando"
        />

        <div>
          <strong>gprando/guia_git</strong>
          <p>Um guia rápido e funcional de git</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
