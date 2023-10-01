import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { AvailableHours } from '../../pages/admin/availableHours/availableHours';
import { Professionals } from '../../pages/admin/professionals/professionals';
import { Services } from '../../pages/admin/services/services';
import { ADMIN_ROUTES } from '../../routing/utils';


const initAdminNavigation = (adminRoutes = []) => {
  return adminRoutes.map(item => (
    <Tab>
      <NavLink to={item.path}>
        {item.title}
      </NavLink>
    </Tab>
  ));
};

export const Navigation = () => {

  return (
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList>
        {initAdminNavigation(ADMIN_ROUTES)}
      </TabList>
    </Tabs>
  )
}
