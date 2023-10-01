import { getItem, setItem } from '../../../helpers/helpers';
import { STORAGE_KEYS } from '../../storage';


export const getProfsList = () => {
  const list = getItem(STORAGE_KEYS.profs);

  if (!(list || Array.isArray(list))) {
    return [];
  } else {
    return  list;
  }
}

export const setProfsList = (data) => {
  return  setItem(STORAGE_KEYS.profs, data);

}
