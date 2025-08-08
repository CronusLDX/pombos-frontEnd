// tipagem do objeto que será enviado para api, nesse caso Clientes
export interface ClientProps {
  id?: string;
  name: string;
  phone: string;
  dateOfBirth: string;
  email: string;
  address: string;
  letterSend: number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

// temos a definição do status segundo o exercicio pede, aqui esta a tipagem
export type statusMail = 'na fila' | 'enviado' | 'entregue';

// temos a definição do status segundo o exercicio pede, aqui esta a tipagem
export type statusPidgey = 'ativo' | 'aposentado';

// tipagem do objeto que será enviado para api, nesse caso Cartas
export interface MailProps {
  id?: string;
  title: string;
  address: string;
  destination: string;
  remitter: string;
  pidgey: string;
  status: string;
  content: string;
  createdAt?: string;
  updatedAt?: string;
}

// tipagem do objeto que será enviado para api, nesse caso Pombos
export interface PidgeyProps {
  id?: string;
  picture?: string;
  nickname: string;
  averageSpeed: number;
  status: string;
  dateOfBirth: string;
  letterDelivered: number;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
}

// interfaxe do contexto que será usado, nesse caso Clientes

export interface ClientContextProps {
  client: ClientProps[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  updateClients: (updatedClient: ClientProps) => void;
  deleteClients: (id: string) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}

// interfaxe do contexto que será usado, nesse caso Cartas
export interface MailContextProps {
  mail: MailProps[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  updateMail: (updatedMail: MailProps) => void;
  deleteMail: (id: string) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}

// interfaxe do contexto que será usado, nesse caso Pombos
export interface PidgeyContextProps {
  pidgey: PidgeyProps[];
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  updatePidgey: (updatedPidgey: PidgeyProps) => void;
  deletePidgey: (id: string) => void;
  formRef: React.RefObject<HTMLFormElement | null>;
}
