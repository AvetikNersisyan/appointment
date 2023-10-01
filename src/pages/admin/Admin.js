import { Outlet } from 'react-router';
import { Navigation } from '../../components/Navigation/Navigation';


export const Admin = () => {

  return (
    <div>
      <Navigation/>
      <Outlet/>
     </div>
  )
}
