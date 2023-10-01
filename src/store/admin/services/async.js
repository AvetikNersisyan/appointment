import { getServicesList, setServicesList } from './utils';


const saveData = (data = {}) => {
    const storageData = getServicesList();
    storageData.push(data);
    return setServicesList(storageData);
}

const getListData = (data = {}) => {
    return  getServicesList();
}



export {
  saveData,
  getListData,
}

