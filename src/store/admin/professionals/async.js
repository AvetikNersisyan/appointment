import { getProfsList, setProfsList } from './utils';


const saveData = (data = {}) => {
    const storageData = getProfsList();
    storageData.push(data);
    return setProfsList(storageData);
}

const getListData = (data = {}) => {
    return  getProfsList();
}



export {
  saveData,
  getListData,
}

