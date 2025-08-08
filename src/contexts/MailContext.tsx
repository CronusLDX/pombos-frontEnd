import { createContext, useContext, useEffect, useState } from 'react';
import type {
  ClientProps,
  MailContextProps,
  MailProps,
  PidgeyProps,
  statusMail,
} from '../utilities/Interfaces';

import { usePidgey } from './PidgeyContext';
import { useClient } from './ClientContext';
import { deleteMailById, getAllMails, postMail, putMail } from '../api/api';
import React from 'react';
import { convertId } from '../utilities/utilitary';

export const MailContext: React.Context<MailContextProps | null> =
  createContext<MailContextProps | null>(null);

export const MailProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [mail, setMail] = useState<MailProps[]>([]);
  const showAlert = (message: string): void => alert(message);
  const { pidgey, updatePidgey } = usePidgey();
  const { client, updateClients } = useClient();

  const formRef = React.useRef<HTMLFormElement | null>(null);
  const fetchAllMail = async () => {
    try {
      const response = await getAllMails();
      const mailWithNewId = convertId(response.data);
      setMail(mailWithNewId);
    } catch (error) {
      console.error('Error fetching mail:', error);
    }
  };
  useEffect(() => {
    fetchAllMail();
  }, []);

  const validateCharsOnly = (item: string): boolean => {
    const regex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s,\.]+$/;
    return regex.test(item);
  };

  const validateAddress = (item: string): boolean => {
    const regex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s,\.]+$/;
    return regex.test(item);
  };
  const validateStatusMail = (item: string): boolean => {
    const regex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    const allowedMailStatus: statusMail[] = ['na fila', 'enviado', 'entregue'];
    const lowerCaseItem = item.toLowerCase();
    const statusTested = regex.test(lowerCaseItem);
    if (statusTested) {
      return allowedMailStatus.includes(item.toLowerCase() as statusMail);
    }
    return false;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      const allPidgeysNicknamesAndStatus = Array.isArray(pidgey)
        ? pidgey.map(p => ({
            nickname: p.nickname,
            status: p.status,
          }))
        : [];

      const allClientsName = Array.isArray(client)
        ? client.map((client: ClientProps) => client.name.toLowerCase())
        : [];
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const mailPidgeyName = (
        formData.get('mailPidgey') as string
      ).toLowerCase();
      const clientName = (formData.get('remitter') as string).toLowerCase();
      const validatedTitle = validateCharsOnly(formData.get('title') as string);
      const validatedAddress = validateAddress(
        formData.get('address') as string
      );
      const validatedDestination = validateCharsOnly(
        formData.get('destination') as string
      );
      const validatedRemitter = validateCharsOnly(
        formData.get('remitter') as string
      );
      const validatedPidgey = validateCharsOnly(
        formData.get('mailPidgey') as string
      );
      const validatedStatus = validateStatusMail(
        formData.get('status') as string
      );
      const pidgeyExistsAndIsActive = allPidgeysNicknamesAndStatus.some(
        pidgey => {
          return (
            pidgey.nickname.toLowerCase() === mailPidgeyName &&
            pidgey.status.toLowerCase() === 'ativo'
          );
        }
      );
      const clientExists = allClientsName.some(
        client => client.toLowerCase() === clientName
      );
      if (!validatedTitle) {
        showAlert('Título inválido!');
      } else if (!validatedStatus) {
        showAlert('Status inválido!');
      } else if (!validatedAddress) {
        showAlert('Endereço inválido!');
      } else if (!validatedDestination) {
        showAlert('Destino inválido!');
      } else if (!validatedRemitter) {
        showAlert('Remetente inválido!');
      } else if (!validatedPidgey) {
        showAlert('Pombo inválido!');
      } else if (!pidgeyExistsAndIsActive) {
        {
          showAlert(
            'Pombo inexistente no sistema ou aposentado, por favor cadastre-o ou escolha outro pombo!'
          );
        }
      } else if (!clientExists) {
        {
          showAlert(
            'Remetente inexistente no sistema, por favor cadastre-o ou escolha outro remetente!'
          );
        }
      } else {
        const newMail: MailProps = {
          title:
            validatedTitle === true ? (formData.get('title') as string) : '',
          address:
            validatedAddress === true
              ? (formData.get('address') as string)
              : '',
          destination:
            validatedDestination === true
              ? (formData.get('destination') as string)
              : '',
          remitter: formData.get('remitter') as string,

          pidgey:
            validatedPidgey === true && pidgeyExistsAndIsActive === true
              ? (formData.get('mailPidgey') as string)
              : '',
          status:
            validatedStatus === true ? (formData.get('status') as string) : '',
          content: formData.get('content') as string,
        };
        const response = await postMail(newMail);
        const mailWithNewId = convertId(response.data);
        setMail(prevMail => [...prevMail, mailWithNewId]);

        try {
          const foundClient = client.find(
            client => client.name.toLowerCase() === clientName
          );

          const foundPidgey = pidgey.find(
            pidgey => pidgey.nickname.toLowerCase() === mailPidgeyName
          );
          if (foundPidgey) {
            const updatedPidgey: PidgeyProps = {
              ...foundPidgey,
              letterDelivered: (foundPidgey.letterDelivered || 0) + 1,
            };
            updatePidgey(updatedPidgey);
          }

          if (foundClient) {
            const updatedClient: ClientProps = {
              ...foundClient,
              letterSend: (foundClient.letterSend || 0) + 1,
            };
            updateClients(updatedClient);
          }
        } catch (error) {
          console.log(error);
          showAlert(
            'Erro ao atualizar o critério "Cartas entregues" em Pombos ou "Cartas enviadas" do remetente em Cliente!'
          );
        }
        showAlert('Carta cadastrada com sucesso!');
        formRef.current?.reset();
      }
    } catch (error) {
      console.log(error);
      showAlert('Erro ao cadastrar a carta!');
    }
  };

  const updateMail = async (updatedMail: MailProps): Promise<void> => {
    try {
      const validatedTitle = validateCharsOnly(updatedMail.title);
      const validatedAddress = validateAddress(updatedMail.address);
      const validatedDestination = validateCharsOnly(updatedMail.destination);
      const validatedRemitter = validateCharsOnly(updatedMail.remitter);
      const validatedPidgey = validateCharsOnly(updatedMail.pidgey);
      const validatedStatus = validateStatusMail(updatedMail.status);
      const currentMailStatus = mail.find(mail => mail.id === updatedMail.id);
      const mailIsDelivered =
        currentMailStatus?.status.toLowerCase() === 'entregue';
      const pidgeyExistsAndIsActive = pidgey.some(
        pidgey =>
          pidgey.nickname.toLowerCase() === updatedMail.pidgey.toLowerCase() &&
          pidgey.status.toLowerCase() === 'ativo'
      );
      const clientExists = client.some(
        client =>
          client.name.toLowerCase() === updatedMail.remitter.toLowerCase()
      );
      if (!validatedTitle) {
        showAlert('Título inválido!');
      } else if (!validatedStatus) {
        showAlert('Status inválido!');
      } else if (!validatedAddress) {
        showAlert('Endereço inválido!');
      } else if (mailIsDelivered) {
        {
          showAlert('Carta entregue, impossível editar o seu status!');
        }
      } else if (!validatedDestination) {
        showAlert('Destinatário inválido!');
      } else if (!validatedRemitter) {
        showAlert('Remetente inválido!');
      } else if (!validatedPidgey) {
        showAlert('Nome de pombo  inválido!');
      } else if (!pidgeyExistsAndIsActive) {
        {
          showAlert(
            'Pombo inexistente no sistema ou aposentado, por favor cadastre-o ou escolha outro pombo!'
          );
        }
      } else if (!clientExists) {
        {
          showAlert(
            'Remetente inexistente no sistema, por favor cadastre-o ou escolha outro remetente!'
          );
        }
      } else {
        if (!updatedMail.id) throw new Error('ID do cliente ausente!');
        const response = await putMail(updatedMail.id, updatedMail);
        const mailwithNewId = convertId(response.data);
        const updatedMails: MailProps[] = mail.map(mail => {
          if (mail.id === updatedMail.id) {
            return {
              ...mail,
              ...mailwithNewId,
            };
          } else {
            return mail;
          }
        });
        setMail(updatedMails);

        showAlert('Carta atualizada com sucesso!');
      }
    } catch (error) {
      console.log(error);
      showAlert('Erro ao atualizar a carta.');
    }
  };

  const deleteMail = async (id: string): Promise<void> => {
    try {
      await deleteMailById(id);
      setMail(prevMail => prevMail.filter(mail => mail.id !== id));
      showAlert('Carta deletada com sucesso!');
    } catch (error) {
      console.log(error);
      showAlert('Erro ao deletar a carta!');
    }
  };
  return (
    <MailContext.Provider
      value={{ mail, handleSubmit, updateMail, deleteMail, formRef }}
    >
      {children}
    </MailContext.Provider>
  );
};

export const useMail = (): MailContextProps => {
  const context = useContext(MailContext);
  if (!context) {
    throw new Error('Provider nao foi configurado propriamente!');
  }
  return context;
};
