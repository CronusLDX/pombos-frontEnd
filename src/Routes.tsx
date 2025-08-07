import { createBrowserRouter } from 'react-router';
import Root from './Components/RootLayout/Root';
import Home from './Components/Home/Home';
import ClientsLayout from './Components/ClientsTemplate/ClientsLayout';
import ListClients from './Components/ClientsTemplate/ListClients/ListClients';
import CreateClients from './Components/ClientsTemplate/CreateClients/CreateClients';
import UpdateClients from './Components/ClientsTemplate/UpdateClients/UpdateClients';
import ShowClients from './Components/ClientsTemplate/ShowClients/ShowClients';
import PidgeyLayout from './Components/PidgeyTemplate/PidgeyLayout';
import CreatePidgey from './Components/PidgeyTemplate/CreatePidgey/CreatePidgey';
import ListPidgey from './Components/PidgeyTemplate/ListPidgey/ListPidgey';
import UpdatePidgey from './Components/PidgeyTemplate/UpdatePidgey/UpdatePidgey';
import ShowPidgey from './Components/PidgeyTemplate/ShowPidgey/ShowPidgey';
import MailLayout from './Components/MailTemplate/MailLayout';
import ListMail from './Components/MailTemplate/ListMail/ListMail';
import CreateMail from './Components/MailTemplate/CreateMail/CreateMail';
import UpdateMail from './Components/MailTemplate/UpdateMail/UpdateMail';
import ShowMail from './Components/MailTemplate/ShowMail/ShowMail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      {
        path: 'clientes',
        element: <ClientsLayout />,
        children: [
          { index: true, element: <ListClients /> },
          { path: 'criar', element: <CreateClients /> },
          { path: 'atualizar', element: <UpdateClients /> },
          { path: 'verificar', element: <ShowClients /> },
        ],
      },
      {
        path: 'pombos',
        element: <PidgeyLayout />,
        children: [
          { index: true, element: <ListPidgey /> },
          { path: 'criar', element: <CreatePidgey /> },
          { path: 'atualizar', element: <UpdatePidgey /> },
          { path: 'verificar', element: <ShowPidgey /> },
        ],
      },
      {
        path: 'cartas',
        element: <MailLayout />,
        children: [
          { index: true, element: <ListMail /> },
          { path: 'criar', element: <CreateMail /> },
          { path: 'atualizar', element: <UpdateMail /> },
          { path: 'verificar', element: <ShowMail /> },
        ],
      },
    ],
  },
]);

export default router;
