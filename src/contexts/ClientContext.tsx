import { createContext, useContext, useEffect, useState } from 'react';
import type { ClientContextProps, ClientProps } from '../utilities/Interfaces';
import { v4 as uuidv4 } from 'uuid';
import { usePidgey } from './PidgeyContext';

export const ClientContext: React.Context<ClientContextProps | null> =
  createContext<ClientContextProps | null>(null);

export const ClientProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [client, setClient] = useState<ClientProps[]>([]);
  const showAlert = (message: string): void => alert(message);
  const { formRef } = usePidgey();

  useEffect(() => {
    console.log(client);
  }, [client]);

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
          id: uuidv4(),
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
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        setClient(prevClient => [...prevClient, newClient]);
        showAlert('Cliente criado com sucesso!');
      }
    } catch (error) {
      console.log(error);
    } finally {
      formRef.current?.reset();
    }
  };

  const updateClients = (updatedClient: ClientProps): void => {
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
        const updatedClients = client.map(client => {
          if (client.id === updatedClient.id) {
            return {
              ...updatedClient,
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

  const deleteClients = (id: string) => {
    try {
      setClient(prevClient => prevClient.filter(client => client.id !== id));
      showAlert('Cliente deletado com sucesso!');
    } catch (error) {
      console.log(error);
      showAlert('Erro ao deletar o cliente.');
    }
  };
  return (
    <ClientContext.Provider
      value={{ client, handleSubmit, updateClients, deleteClients }}
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
