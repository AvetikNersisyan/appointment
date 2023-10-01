import { Button } from '@chakra-ui/react';
import { cloneDeep } from 'lodash';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIDGenerator } from '../../../hooks/useIDGenerator';
import { saveData } from '../../../store/admin/professionals/async';
import {
  profActions,
  selectProfSlice
} from '../../../store/admin/professionals/professionals';
import { FormInput } from '../../../uiElements/FormInput';
import { Form, FormWrapper } from './professionals.styles';
import { validateProfData } from './validators';

const requiredFields = [
  {
    dataIndex: 'name',
    message: 'Name is Required',
  },
    {
    dataIndex: 'lastName',
    message: 'Surname  is Required',
  },

]

export const AddProf = () => {
  const [errors, setErrors] = useState({});
  const { baseData } = useSelector(selectProfSlice);
  const dispatch = useDispatch();
  const [genID] = useIDGenerator();


  const onValueChange  = (value,key) => {
    const clonedData = cloneDeep(baseData);
    const uuid = genID();
    if (!clonedData.id)  {
      clonedData.id = uuid;
    }
    clonedData[key] = value;
    dispatch(profActions.baseDataRefresh(clonedData));

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateProfData(baseData, requiredFields);
    console.log('errors : ', errors);
    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors({})
    }
    saveData(baseData);

  }
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormInput
          errors={errors}
          name={'name'}
          label={'Name'}
          placeholder={'Name'}
          onChange={(e) => onValueChange(e.target.value, 'name')}
        />
        <FormInput
          errors={errors}
          name={'lastName'}
          label={'Surname'}
          placeholder={'Surname'}
          onChange={(e) => onValueChange(e.target.value, 'lastName')}
        />

        <Button variant={'solid'} type={'submit'}> Save </Button>

      </Form>
    </FormWrapper>
  )
}
