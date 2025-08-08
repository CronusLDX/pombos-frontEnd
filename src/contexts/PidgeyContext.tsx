import { createContext, useContext, useEffect, useState } from 'react';
import type {
  PidgeyProps,
  PidgeyContextProps,
  statusPidgey,
} from '../utilities/Interfaces';
import React from 'react';
import {
  deletePidgeyById,
  getAllPidgeys,
  postPidgey,
  putPidgey,
} from '../api/api';
import { convertId } from '../utilities/utilitary';

export const PidgeyContext: React.Context<PidgeyContextProps | null> =
  createContext<PidgeyContextProps | null>(null);

export const PidgeyProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pidgey, setPidgey] = useState<PidgeyProps[]>([]);
  const showALert = (message: string): void => alert(message);

  const formRef = React.useRef<HTMLFormElement | null>(null);

  const fetchAllPidgey = async () => {
    try {
      const response = await getAllPidgeys();
      const pidgeyWithNewId = convertId(response.data);
      setPidgey(pidgeyWithNewId);
    } catch (error) {
      console.error('Error fetching pidgey:', error);
    }
  };
  useEffect(() => {
    fetchAllPidgey();
  }, []);

  const validateNickName = (name: string): boolean => {
    const regex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return regex.test(name);
  };

  const validateStatus = (name: string): boolean => {
    const regex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const allowedStatus: statusPidgey[] = ['ativo', 'aposentado'];
    const lowerName = name.toLowerCase();
    const nameTested = regex.test(lowerName);

    if (nameTested) {
      return allowedStatus.includes(lowerName as statusPidgey);
    }
    return false;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const rawPidgeyNickname = (
        formData.get('nickname') as string
      ).toLowerCase();
      const nicknameAlreadyRegistered = pidgey.some(
        pidgey => pidgey.nickname.toLowerCase() === rawPidgeyNickname
      );

      const rawAverageSpeed = parseFloat(
        formData.get('averageSpeed') as string
      );
      const rawLetterDelivered = parseFloat(
        formData.get('letterDelivered') as string
      );
      const validatedNickName = validateNickName(
        formData.get('nickName') as string
      );
      const validatedStatus = validateStatus(formData.get('status') as string);

      if (!validatedNickName) {
        showALert('Nome inválido!');
      } else if (nicknameAlreadyRegistered) {
        showALert('Nome de pombos já cadastrado!');
      } else if (!validatedStatus) {
        showALert('Status inválido!');
      } else {
        const newPidgey: PidgeyProps = {
          picture: formData.get('picture') as string,
          nickname:
            validatedNickName === true
              ? (formData.get('nickname') as string)
              : '',
          averageSpeed: rawAverageSpeed,
          status:
            validatedStatus === true
              ? (formData.get('status') as string).toLocaleLowerCase()
              : '',
          dateOfBirth: formData.get('dateOfBirth') as string,
          letterDelivered: rawLetterDelivered,
          description: formData.get('description') as string,
        };
        const response = await postPidgey(newPidgey);
        const pidgeyWithNewId = convertId([response.data]);
        setPidgey(prevPidgey => [...prevPidgey, pidgeyWithNewId]);

        showALert('Pombos criado com sucesso!');

        formRef.current?.reset();
      }
    } catch (error) {
      console.log(error);

      showALert('Erro ao criar o pombos!');
    }
  };

  const updatePidgey = async (updatedPidgey: PidgeyProps) => {
    try {
      const validatedUpdatedNickName = validateNickName(updatedPidgey.nickname);
      const validatedUpdatedStatus = validateStatus(updatedPidgey.status);
      if (!validatedUpdatedNickName) {
        showALert('Nome inválido!');
      } else if (!validatedUpdatedStatus) {
        showALert('Status inválido!');
      } else {
        if (!updatedPidgey.id) throw new Error('ID do cliente ausente!');
        const response = await putPidgey(updatedPidgey.id, updatedPidgey);
        const newPidgeyWithNewId = convertId(response.data);
        const updatePidgey = pidgey.map(pidgey => {
          if (pidgey.id === updatedPidgey.id) {
            return {
              ...pidgey,
              ...newPidgeyWithNewId,
              status: newPidgeyWithNewId.status.toLowerCase(),
            };
          } else {
            return pidgey;
          }
        });
        setPidgey(updatePidgey);

        showALert('Pombos atualizado com sucesso!');
      }
    } catch (error) {
      console.log(error);

      showALert('Erro ao atualizar o pombos!');
    }
  };
  const deletePidgey = async (id: string) => {
    try {
      await deletePidgeyById(id);
      setPidgey(prevPidgey => prevPidgey.filter(pidgey => pidgey.id !== id));

      showALert('Pombos deletado com sucesso!');
    } catch (error) {
      console.log(error);

      showALert('Erro ao deletar o pombos.');
    }
  };
  return (
    <PidgeyContext.Provider
      value={{ pidgey, handleSubmit, updatePidgey, deletePidgey, formRef }}
    >
      {children}
    </PidgeyContext.Provider>
  );
};

export const usePidgey = (): PidgeyContextProps => {
  const context = useContext(PidgeyContext);
  if (!context) {
    throw new Error('Provider nao foi configurado propriamente!');
  }
  return context;
};
