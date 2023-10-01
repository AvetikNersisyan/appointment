import { getAvailableHours, setAvailableHours } from './utils';


const saveData = (data = {}) => {
    const storageData = getAvailableHours();
    storageData.push(data);
    return setAvailableHours(storageData);
}

const getListData = (data = {}) => {
    return  getAvailableHours();
}



export {
  saveData,
  getListData,
}

