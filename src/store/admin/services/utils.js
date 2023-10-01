import { getItem, setItem } from '../../../helpers/helpers';
import { STORAGE_KEYS } from '../../storage';


export const getServicesList = () => {
  const list = getItem(STORAGE_KEYS.services);

  if (!(list || Array.isArray(list))) {
    return [];
  } else {
    return  list;
  }
}

export const setServicesList = (data) => {
  return  setItem(STORAGE_KEYS.services, data);

}
