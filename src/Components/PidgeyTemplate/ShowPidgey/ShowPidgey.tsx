import React from 'react';
import { Main, StyledLink } from './styled';
import { usePidgey } from '../../../contexts/PidgeyContext';
import { useParams } from 'react-router-dom';

const ShowPidgey: React.FC = () => {
  const { id } = useParams();
  const { pidgey } = usePidgey();

  const foundData = pidgey.find(pidgey => String(pidgey.id) === String(id));

  if (!foundData) {
    return (
      <Main>
        <h1>Pombo não encontrado</h1>
        <StyledLink to="/pombos">Voltar para lista</StyledLink>
      </Main>
    );
  }
  return (
    <>
      <Main>
        <form>
          <section>
            <div>
              <label htmlFor="picture">&nbsp;Foto:</label>
              <input
                type="text"
                id="picture"
                name="picture"
                placeholder="URL da imagem"
                value={foundData.picture}
                disabled
              />
            </div>
            <div>
              <label htmlFor="nickname">&nbsp;Apelido:</label>
              <input
                type="text"
                id="nickname"
                name="nickname"
                placeholder="Ex: Gatilho"
                value={foundData.nickname}
                disabled
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
                value={foundData.averageSpeed}
                placeholder="Ex: 50"
                disabled
              />
            </div>
            <div>
              <label htmlFor="status">&nbsp;Status:</label>
              <input
                type="text"
                id="status"
                name="status"
                placeholder="Ex: Ativo ou Aposentado"
                value={foundData.status}
                disabled
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
                disabled
                value={foundData.dateOfBirth}
              />
            </div>

            <div>
              <label htmlFor="letterDelivered">&nbsp;Cartas Entregues</label>
              <input
                type="number"
                id="letterDelivered"
                name="letterDelivered"
                value={foundData.letterDelivered}
                disabled
              />
            </div>
          </section>
          <div>
            <label htmlFor="description">&nbsp;Descrição:</label>
            <textarea
              id="description"
              name="description"
              placeholder="Ex: Descrição"
              value={foundData.description}
              disabled
            ></textarea>
          </div>
          <button type="button">
            <StyledLink to="/pombos">Voltar</StyledLink>
          </button>
        </form>
      </Main>
      <footer>
        Criado em: &nbsp; <span>{foundData.createdAt}</span> &nbsp; | &nbsp; ID:{' '}
        <span>&nbsp;{foundData.id}</span> &nbsp; | &nbsp; Atualizado em:{' '}
        <span>&nbsp;{foundData.updatedAt}</span>
      </footer>
    </>
  );
};

export default ShowPidgey;
