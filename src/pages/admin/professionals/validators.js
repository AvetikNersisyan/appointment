import { isEmpty } from 'lodash';


export const validateProfData = (data = {}, requiredFields = []) => {
  const errors = {};

  requiredFields.forEach(item => {

    if (!data[item.dataIndex]) {
      errors[item.dataIndex] = (item.message)
    }
  })

  return Object.keys(errors).length ? errors : false;
}
