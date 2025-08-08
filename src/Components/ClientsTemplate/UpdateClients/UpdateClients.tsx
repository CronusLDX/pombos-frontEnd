import React, { useEffect, useState } from 'react';
import { Main, StyledLink } from './styled';
import { useParams } from 'react-router';
import { useClient } from '../../../contexts/ClientContext';
import type { ClientProps } from '../../../utilities/Interfaces';

const UpdateClients: React.FC = () => {
  const { id } = useParams();
  const { client, updateClients } = useClient();

  const foundData = client.find(client => client.id === id);

  const [item, setItem] = useState<ClientProps | undefined>(foundData);

  if (!item)
    return (
      <Main>
        <h1>Cliente não encontrado</h1>
        <StyledLink to="/clientes">Voltar para lista</StyledLink>
      </Main>
    );

  useEffect(() => {
    setItem(foundData);
  }, [foundData]);
  return (
    <>
      <Main>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (item) updateClients(item);
          }}
        >
          <section>
            <div>
              <label htmlFor="name">&nbsp;Nome:</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Ex: João Pedro"
                value={item.name}
                onChange={e => setItem({ ...item, name: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="phone">&nbsp;Telefone:</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="Ex: (11) 99999-9999"
                value={item.phone}
                onChange={e => setItem({ ...item, phone: e.target.value })}
                required
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="dateOfBirth">&nbsp;Data de Nascimento:</label>
              <input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                required
                value={item.dateOfBirth}
                onChange={e =>
                  setItem({ ...item, dateOfBirth: e.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="email">&nbsp;Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ex: exemplo@email.com"
                value={item.email}
                onChange={e => setItem({ ...item, email: e.target.value })}
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
                value={item.address}
                onChange={e => setItem({ ...item, address: e.target.value })}
                required
              />
            </div>
            <div>
              <label htmlFor="letterSend">&nbsp;Cartas enviadas</label>
              <input
                type="number"
                id="letterSend"
                name="letterSend"
                required
                value={item.letterSend}
                onChange={e =>
                  setItem({ ...item, letterSend: parseFloat(e.target.value) })
                }
              />
            </div>
          </section>
          <div>
            <label htmlFor="description">&nbsp;Descrição:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Ex: Descrição"
              value={item.description}
              onChange={e => setItem({ ...item, description: e.target.value })}
            ></textarea>
          </div>
          <button id="save" type="submit">
            Salvar
          </button>
        </form>
      </Main>
      <footer className="flex justify-center text-center items-center">
        Criado em: &nbsp; <span>{new Date().toLocaleString()}</span> &nbsp; |
        &nbsp; ID: <span>&nbsp;{Math.floor(Math.random() * 100000000)}</span>{' '}
        &nbsp; | &nbsp; Atualizado em:{' '}
        <span>&nbsp;{new Date().toLocaleString()}</span>
      </footer>
    </>
  );
};

export default UpdateClients;
