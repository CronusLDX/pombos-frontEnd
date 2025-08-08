import { RouterProvider } from 'react-router-dom';
import router from './Routes';
import { ClientProvider } from './contexts/ClientContext';
import { PidgeyProvider } from './contexts/PidgeyContext';
import { MailProvider } from './contexts/MailContext';

const App = () => {
  return (
    <>
      <PidgeyProvider>
        <ClientProvider>
          <MailProvider>
            <RouterProvider router={router}></RouterProvider>
          </MailProvider>
        </ClientProvider>
      </PidgeyProvider>
    </>
  );
};

export default App;
