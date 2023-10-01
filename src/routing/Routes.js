import { createBrowserRouter } from 'react-router-dom';
import { Admin } from '../pages/admin/Admin';
import { Main } from '../pages/main/Main';

import { ADMIN_ROUTES } from './utils';


const adminRoutes = ADMIN_ROUTES.map(({ path, element }) => (
  {
    path,
    element,
  }
  ))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: '/admin',
    element: <Admin/>,
    children: adminRoutes,
  }

]);
