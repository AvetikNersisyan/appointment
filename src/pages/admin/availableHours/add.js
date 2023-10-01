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
import { selectServiceSlice } from '../../../store/admin/services/services';
import { FormInput } from '../../../uiElements/FormInput';
import { FormInputSelect } from '../../../uiElements/FormInputSelect';
import { Form, FormWrapper } from './professionals.styles';
import { validateProfData } from './validators';

const requiredFields = []

export const AddHours = () => {
  const [errors, setErrors] = useState({});
  const { baseData, list: profsList } = useSelector(selectProfSlice);
  const { list: serviceList } = useSelector(selectServiceSlice);
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
    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors({})
    }
    saveData(baseData);

  }

  const initProfsList = profsList.map(item => ({id: item.id, title: item.name}))
  const initServiceList = serviceList.map(item => ({id: item.id, title: item.name}))
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormInputSelect
          errors={errors}
          optionsList={initProfsList}
          name={'professionalID'}
          label={'Professional'}
          placeholder={'Professional'}
          onChange={(e) => onValueChange(e.target.value, 'professionalID')}
        />

        <FormInputSelect
          errors={errors}
          optionsList={initServiceList}
          name={'serviceID'}
          label={'Service'}
          placeholder={'Service'}
          onChange={(e) => onValueChange(e.target.value, 'serviceID')}
        />
        <FormInput
          errors={errors}
          name={'startTime'}
          label={'Start time'}
          placeholder={'Start time'}
          onChange={(e) => onValueChange(e.target.value, 'startTime')}
        />

        <Button variant={'solid'} type={'submit'}> Save </Button>

      </Form>
    </FormWrapper>
  )
}
