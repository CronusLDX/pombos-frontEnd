import React, { useEffect, useState } from 'react';
import { Main, StyledLink } from './styled';
import { useParams } from 'react-router';
import { useMail } from '../../../contexts/MailContext';
import type { MailProps } from '../../../utilities/Interfaces';

const UpdateMail: React.FC = () => {
  const { id } = useParams();
  const { mail, updateMail } = useMail();

  const foundMail = mail.find(mail => mail.id === id);
  const [item, setItem] = useState<MailProps | undefined>(foundMail);

  if (!item) {
    return (
      <Main>
        <h1>Carta não encontrada</h1>
        <StyledLink to="/cartas">Voltar para lista</StyledLink>
      </Main>
    );
  }

  useEffect(() => {
    setItem(foundMail);
  }, [foundMail]);
  return (
    <>
      <Main>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (item) updateMail(item);
          }}
        >
          <section>
            <div>
              <label htmlFor="title">&nbsp;Título:</label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Carta À senhor Gertrudes"
                required
                value={item.title}
                onChange={event =>
                  setItem({ ...item, title: event.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="address">&nbsp;Endereço:</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Ex: Rua dos Bobos Número 0"
                required
                value={item.address}
                onChange={event =>
                  setItem({ ...item, address: event.target.value })
                }
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="destination">&nbsp;Destinatário:</label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Ex: Sr.Smith"
                required
                value={item.destination}
                onChange={event =>
                  setItem({ ...item, destination: event.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="remitter">&nbsp;Remetente:</label>
              <input
                type="text"
                id="remitter"
                name="remitter"
                placeholder="Ex: Sr.Jones"
                required
                value={item.remitter}
                onChange={event =>
                  setItem({ ...item, remitter: event.target.value })
                }
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="mailPidgey">&nbsp;Pombo-correio</label>
              <input
                type="text"
                id="mailPidgey"
                name="mailPidgey"
                placeholder="Ex: Gatilho"
                required
                value={item.pidgey}
                onChange={event =>
                  setItem({ ...item, pidgey: event.target.value })
                }
              />
            </div>
            <div>
              <label htmlFor="status">&nbsp;Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="Ex: Na fila"
                required
                value={item.status}
                onChange={event =>
                  setItem({ ...item, status: event.target.value })
                }
              />
            </div>
          </section>
          <div>
            <label htmlFor="content">&nbsp;Contéudo:</label>
            <textarea
              id="content"
              name="content"
              placeholder="Ex: Conteúdo da carta"
              required
              value={item.content}
              onChange={event =>
                setItem({ ...item, content: event.target.value })
              }
            ></textarea>
          </div>
          <button id="save" type="submit">
            Salvar
          </button>
        </form>
      </Main>
      <footer className="flex justify-center text-center items-center">
        Criado em: &nbsp; <span>{item.createdAt}</span> &nbsp; | &nbsp; ID:{' '}
        <span>&nbsp;{item.id}</span> &nbsp; | &nbsp; Atualizado em:{' '}
        <span>&nbsp;{item.updatedAt}</span>
      </footer>
    </>
  );
};

export default UpdateMail;
