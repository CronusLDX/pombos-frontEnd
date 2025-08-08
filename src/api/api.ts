import axios, { type AxiosInstance } from 'axios';
import type {
  ClientProps,
  MailProps,
  PidgeyProps,
} from '../utilities/Interfaces';

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_DEV_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getAllClientes = async () => api.get('/clientes');
export const getAllPidgeys = async () => api.get('/pombos');
export const getAllMails = async () => api.get('/cartas');

export const postClient = async (client: ClientProps) =>
  api.post('/clientes', client);
export const postPidgey = async (pidgey: PidgeyProps) =>
  api.post('/pombos', pidgey);
export const postMail = async (mail: MailProps) => api.post('/cartas', mail);

export const putClient = async (id: string, client: ClientProps) =>
  api.put(`/clientes/${id}`, client);
export const putPidgey = async (id: string, pidgey: PidgeyProps) =>
  api.put(`/pombos/${id}`, pidgey);
export const putMail = async (id: string, mail: MailProps) =>
  api.put(`/cartas/${id}`, mail);

export const deleteClientbyId = async (id: string) =>
  api.delete(`/clientes/${id}`);
export const deletePidgeyById = async (id: string) =>
  api.delete(`/pombos/${id}`);
export const deleteMailById = async (id: string) => api.delete(`/cartas/${id}`);
export default api;
