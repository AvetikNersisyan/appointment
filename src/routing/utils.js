import { AvailableHours } from '../pages/admin/availableHours/availableHours';
import { Professionals } from '../pages/admin/professionals/professionals';
import { Services } from '../pages/admin/services/services';


export const ADMIN_ROUTES = [
  {
    path   : 'services',
    title  : 'Services',
    element: <Services/>
  },
  {
    path   : 'professionals',
    title  : 'Professionals',
    element: <Professionals/>
  },
  {
    path   : 'available-hours',
    title  : 'Available hours',
    element: <AvailableHours/>
  },

];
