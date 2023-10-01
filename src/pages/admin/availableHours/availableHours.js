import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  hoursActions,
} from '../../../store/admin/availableHours/services';
import { getAvailableHours } from '../../../store/admin/availableHours/utils';
import { profActions } from '../../../store/admin/professionals/professionals';
import { getProfsList } from '../../../store/admin/professionals/utils';
import { serviceActions } from '../../../store/admin/services/services';

import { getServicesList } from '../../../store/admin/services/utils';
import { AddHours } from './add';
import { List } from './list';


export const AvailableHours = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const profs    = getProfsList();
    const services = getServicesList();
    const hours    = getAvailableHours();

    dispatch(profActions.listRefresh(profs));
    dispatch(serviceActions.listRefresh(services));
    dispatch(hoursActions.listRefresh(hours));
  }, [dispatch]);

  return (
    <>
      <AddHours/>
      <List/>
    </>
  );
};
