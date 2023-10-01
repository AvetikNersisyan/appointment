import { Tab, TabList, Tabs } from '@chakra-ui/react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import {  } from '../../pages/admin/professionals/professionals';
import { ADMIN_ROUTES } from '../../routing/utils';


const initAdminNavigation = (adminRoutes = []) => {
  return adminRoutes.map(item => (
    <Tab >
      <NavLink to={item.path}>
        {item.title}
      </NavLink>
    </Tab>
  ));
};

export const Navigation = () => {
  const location = useLocation();
  const index  = ADMIN_ROUTES.findIndex(item => location.pathname.includes(item.path))
  return (
    <Tabs index={index} variant='soft-rounded' colorScheme='green'>
      <TabList>
        {initAdminNavigation(ADMIN_ROUTES)}
      </TabList>
    </Tabs>
  )
}
