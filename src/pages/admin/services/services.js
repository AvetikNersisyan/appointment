import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { profActions } from '../../../store/admin/professionals/professionals';
import { getProfsList } from '../../../store/admin/professionals/utils';
import { serviceActions } from '../../../store/admin/services/services';
import { getServicesList } from '../../../store/admin/services/utils';
import { AddService } from './add';
import { List } from './list';


export const Services = () => {
const dispatch = useDispatch();
  useEffect(() => {
    const list = getServicesList();
    const profsList = getProfsList();
    dispatch(serviceActions.listRefresh(list))
    dispatch(profActions.listRefresh(profsList))
  }, [dispatch])

  return (
    <div>
      <AddService/>
      <List/>
    </div>
  )
}
