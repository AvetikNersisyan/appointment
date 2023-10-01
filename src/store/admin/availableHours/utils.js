import { getItem, setItem } from '../../../helpers/helpers';
import { STORAGE_KEYS } from '../../storage';


export const getAvailableHours = () => {
  const list = getItem(STORAGE_KEYS.availableHours);

  if (!(list || Array.isArray(list))) {
    return [];
  } else {
    return  list;
  }
}

export const setAvailableHours = (data) => {
  return  setItem(STORAGE_KEYS.availableHours, data);

}
