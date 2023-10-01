export const validateServiceData = (data = {}, requiredFields = []) => {
  const errors = {};

  requiredFields.forEach(item => {

    if (!data[item.dataIndex]) {
      errors[item.dataIndex] = (item.message)
    }
  })

  return Object.keys(errors).length ? errors : false;
}
