import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/3925509?s=460&u=d5a1930d9e3598e0bf84eb92ce3ba43d3f299b19&v=4"
            alt="Jorge Falca"
          />
          <div>
            <strong>Jfalca repository</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/3925509?s=460&u=d5a1930d9e3598e0bf84eb92ce3ba43d3f299b19&v=4"
            alt="Jorge Falca"
          />
          <div>
            <strong>Jfalca repository</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/3925509?s=460&u=d5a1930d9e3598e0bf84eb92ce3ba43d3f299b19&v=4"
            alt="Jorge Falca"
          />
          <div>
            <strong>Jfalca repository</strong>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
