import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';
interface RepositoryParams{
  repository: string;
}

const Repository: React.FC = () => {
  const {  params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explore" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img src="https://avatars0.githubusercontent.com/u/28929274?v=4" alt="Rocketseat" />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição</p>
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
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="">
          <div>
            <strong>Teste</strong>
              <p>testando</p>
          </div>
          <FiChevronRight size={20} />
        </Link> 
      </Issues>
    </>  
  )
}

export default Repository;