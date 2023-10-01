import { Button } from '@chakra-ui/react';
import { cloneDeep } from 'lodash';
import { useEffect, useId } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateID } from '../../../helpers/helpers';
import { useIDGenerator } from '../../../hooks/useIDGenerator';
import { saveData } from '../../../store/admin/professionals/async';
import { profActions } from '../../../store/admin/professionals/professionals';
import { getProfsList } from '../../../store/admin/professionals/utils';
import { FormInput } from '../../../uiElements/FormInput';
import { AddProf } from './add';
import { List } from './list';


export const Professionals = () => {
const dispatch = useDispatch();

  useEffect(() => {
    const list = getProfsList();
    dispatch(profActions.listRefresh(list))
  }, [dispatch])

  return (
   <>
   <AddProf/>
   <List/>
   </>
  )
}
