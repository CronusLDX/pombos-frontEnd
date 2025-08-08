import React, { useEffect, useState } from 'react';
import { Main, StyledLink } from './styled';
import { useParams } from 'react-router';
import { usePidgey } from '../../../contexts/PidgeyContext';
import type { PidgeyProps } from '../../../utilities/Interfaces';

const UpdatePidgey: React.FC = () => {
  const { id } = useParams();
  const { pidgey, updatePidgey } = usePidgey();

  const foundData = pidgey.find(pidgey => pidgey.id === id);
  const [item, setItem] = useState<PidgeyProps | undefined>(foundData);

  if (!item) {
    return (
      <Main>
        <h1>Pombo não encontrado</h1>
        <StyledLink to="/pombos">Voltar para lista</StyledLink>
      </Main>
    );
  }

  useEffect(() => {
    setItem(foundData);
  }, [foundData]);
  return (
    <>
      <Main>
        <form
          onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault();
            if (item) updatePidgey(item);
          }}
        >
          <section>
            <div>
              <label htmlFor="picture">&nbsp;Foto:</label>
              <input
                type="text"
                id="picture"
                name="picture"
                placeholder="URL da imagem"
                value={item.picture}
                onChange={event =>
                  setItem({ ...item, picture: event.target.value })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="nickname">&nbsp;Apelido:</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Ex: Gatilho"
                value={item.nickname}
                onChange={event =>
                  setItem({ ...item, nickname: event.target.value })
                }
                required
              />
            </div>
          </section>
          <section>
            <div>
              <label htmlFor="averageSpeed">&nbsp;Velocidade Média km/h</label>
              <input
                type="number"
                id="averageSpeed"
                name="averageSpeed"
                placeholder="Ex: 50"
                value={item.averageSpeed}
                onChange={event =>
                  setItem({
                    ...item,
                    averageSpeed: parseFloat(event.target.value),
                  })
                }
                required
              />
            </div>
            <div>
              <label htmlFor="status">&nbsp;Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="Ex: Ativo ou Aposentado"
                value={item.status}
                onChange={event =>
                  setItem({ ...item, status: event.target.value })
                }
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
                onChange={event => {
                  setItem({ ...item, dateOfBirth: event.target.value });
                }}
              />
            </div>

            <div>
              <label htmlFor="letterDelivered">&nbsp;Cartas Entregues</label>
              <input
                type="number"
                id="letterDelivered"
                name="letterDelivered"
                value={item.letterDelivered}
                onChange={event => {
                  setItem({
                    ...item,
                    letterDelivered: parseFloat(event.target.value),
                  });
                }}
                required
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
              onChange={event =>
                setItem({ ...item, description: event.target.value })
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

export default UpdatePidgey;
