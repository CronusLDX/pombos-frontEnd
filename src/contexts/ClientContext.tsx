import { createContext, useContext, useEffect, useState } from 'react';
import type { ClientContextProps, ClientProps } from '../utilities/Interfaces';

import {
  deleteClientbyId,
  getAllClientes,
  postClient,
  putClient,
} from '../api/api';
import React from 'react';
import { convertId } from '../utilities/utilitary';

export const ClientContext: React.Context<ClientContextProps | null> =
  createContext<ClientContextProps | null>(null);

export const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [client, setClient] = useState<ClientProps[]>([]);
  const showAlert = (message: string): void => alert(message);
  const formRef = React.useRef<HTMLFormElement | null>(null);

  const fetchAllClients = async () => {
    try {
      const response = await getAllClientes();
      const clientWithNewId = convertId(response.data);
      setClient(clientWithNewId);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };
  useEffect(() => {
    fetchAllClients();
  }, []);

  const validatePhone = (phone: string): boolean => {
    const regex: RegExp = /^\(?\d{2}\)?\s?9\d{4}-?\d{4}$/;
    return regex.test(phone);
  };
  const validateCharsOnly = (name: string): boolean => {
    const regex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;
    return regex.test(name);
  };

  const validateAddress = (address: string): boolean => {
    const regex: RegExp = /^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s,\.]+$/;
    return regex.test(address);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const formData = new FormData(event.currentTarget);

      const rawLetterSend = parseFloat(formData.get('letterSend') as string);
      const validatedName = validateCharsOnly(formData.get('name') as string);
      const validatedPhone = validatePhone(formData.get('phone') as string);
      const validatedAddress = validateAddress(
        formData.get('address') as string
      );

      if (!validatedName) {
        showAlert('Nome inválido!');
      } else if (!validatedPhone) {
        showAlert('Telefone inválido!');
      } else if (!validatedAddress) {
        showAlert('Endereço inválido!');
      } else {
        const newClient: ClientProps = {
          name: validatedName === true ? (formData.get('name') as string) : '',
          phone:
            validatePhone(formData.get('phone') as string) === true
              ? (formData.get('phone') as string)
              : '',
          dateOfBirth: formData.get('dateOfBirth') as string,
          email: formData.get('email') as string,
          address: formData.get('address') as string,
          letterSend: rawLetterSend,
          description: formData.get('description') as string,
        };

        const response = await postClient(newClient);
        const newClientWithNewId = convertId(response.data);
        setClient(prevClient => [...prevClient, newClientWithNewId]);
        showAlert('Cliente cadastrado com sucesso!');
        formRef.current?.reset();
      }
    } catch (error) {
      console.log(error);
      showAlert('Erro ao cadastrar o cliente.');
    }
  };

  const updateClients = async (updatedClient: ClientProps): Promise<void> => {
    if (!updatedClient.id) throw new Error('ID do cliente ausente!');

    try {
      const updatedClientName = validateCharsOnly(updatedClient.name);
      const updatedClientPhone = validatePhone(updatedClient.phone);
      const updatedClientAddress = validateAddress(updatedClient.address);
      if (!updatedClientName) {
        showAlert('Nome inválido!');
      } else if (!updatedClientPhone) {
        showAlert('Telefone inválido!');
      } else if (!updatedClientAddress) {
        showAlert('Endereço inválido!');
      } else {
        const response = await putClient(updatedClient.id, updatedClient);
        const newClientWithNewId = convertId(response.data);

        const updatedClients = client.map(client => {
          if (client.id === updatedClient.id) {
            return {
              ...client,
              newClientWithNewId,
            };
          } else {
            return client;
          }
        });
        setClient(updatedClients);
        showAlert('Cliente atualizado com sucesso!');
      }
    } catch (error) {
      console.log(error);
      showAlert('Erro ao atualizar o cliente.');
    }
  };

  const deleteClients = async (id: string) => {
    try {
      await deleteClientbyId(id);
      setClient(prevClient => prevClient.filter(client => client.id !== id));
      showAlert('Cliente deletado com sucesso!');
    } catch (error) {
      console.log(error);
      showAlert('Erro ao deletar o cliente.');
    }
  };
  return (
    <ClientContext.Provider
      value={{ client, handleSubmit, updateClients, deleteClients, formRef }}
    >
      {children}
    </ClientContext.Provider>
  );
};

export const useClient = (): ClientContextProps => {
  const context = useContext(ClientContext);
  if (!context) {
    throw new Error('Provider não foi configurado propriamente!');
  }
  return context;
};
