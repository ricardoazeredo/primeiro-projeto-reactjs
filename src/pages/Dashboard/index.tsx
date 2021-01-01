import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import {Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
  return ( 
    <>
      <img src={logoImg} />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="">
          <img 
            src="https://avatars1.githubusercontent.com/u/24982427?s=460&u=33e1fed02af2d0ed05e729660fa3f50783b83e08&v=4" 
            alt="Ricardo Azeredo"
          />
          <div>
            <strong>ricardoazeredo/projetopizza</strong>
            <p>Projeto de Delivery de pizzaria</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img 
            src="https://avatars1.githubusercontent.com/u/24982427?s=460&u=33e1fed02af2d0ed05e729660fa3f50783b83e08&v=4" 
            alt="Ricardo Azeredo"
          />
          <div>
            <strong>ricardoazeredo/projetopizza</strong>
            <p>Projeto de Delivery de pizzaria</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="">
          <img 
            src="https://avatars1.githubusercontent.com/u/24982427?s=460&u=33e1fed02af2d0ed05e729660fa3f50783b83e08&v=4" 
            alt="Ricardo Azeredo"
          />
          <div>
            <strong>ricardoazeredo/projetopizza</strong>
            <p>Projeto de Delivery de pizzaria</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>

    </>
  );
}

export default Dashboard;