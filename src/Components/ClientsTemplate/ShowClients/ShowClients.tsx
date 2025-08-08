import React from 'react';
import { Main, StyledLink } from './styled';
import { useClient } from '../../../contexts/ClientContext';
import { useParams } from 'react-router-dom';

const ShowClients: React.FC = () => {
  const { id } = useParams();
  const { client } = useClient();

  const data = client.find(client => String(client.id) === String(id));

  if (!data) {
    return (
      <Main>
        <h1>Cliente não encontrado</h1>
        <StyledLink to="/clientes">Voltar para lista</StyledLink>
      </Main>
    );
  }
  return (
    <>
      <Main>
        <form>
          <section>
            <div>
              <label htmlFor="name">&nbsp;Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ex: João Pedro"
                value={data.name ? data.name : ''}
                disabled
              />
            </div>
            <div>
              <label htmlFor="phone">&nbsp;Telefone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Ex: (11) 99999-9999"
                value={data.phone ? data.phone : ''}
                disabled
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
              <input type="date" id="dateOfBirth" name="dateOfBirth" />
            </div>
            <div>
              <label htmlFor="email">&nbsp;Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ex: exemplo@email.com"
                value={data.email ? data.email : ''}
                disabled
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="address">&nbsp;Endereço</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Ex: Rua dos Bobos Número 0"
                value={data.address ? data.address : ''}
                disabled
              />
            </div>
            <div>
              <label htmlFor="letterSend">&nbsp;Cartas enviadas</label>
              <input
                type="number"
                id="letterSend"
                name="letterSend"
                disabled
                value={data.letterSend ? data.letterSend : 0}
              />
            </div>
          </section>
          <div>
            <label htmlFor="description">&nbsp;Descrição:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Ex: Descrição"
              disabled
              value={data.description ? data.description : ''}
            ></textarea>
          </div>
          <button type="button">
            <StyledLink to="/clientes">Voltar</StyledLink>
          </button>
        </form>
      </Main>
      <footer className="flex justify-center text-center items-center">
        Criado em: &nbsp; <span>{data.createdAt}</span> &nbsp; | &nbsp; ID:{' '}
        <span>&nbsp;{data.id}</span> &nbsp; | &nbsp; Atualizado em:{' '}
        <span>&nbsp;{data.updatedAt}</span>
      </footer>
    </>
  );
};

export default ShowClients;
