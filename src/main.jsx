import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom';
import { Root } from './routes/Root/Root';
import { Vac } from './components/Vac/Vac';
import { Main } from './components/Main/Main';
import { Contact } from './components/Contact/Contact';
import { Company } from './components/Company/Company';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "Company",
        element: <Company />
      },
      {
        path: "Vac",
        element: <Vac />
      },
      {
        path: "Contact",
        element: <Contact />
      }
    ]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
