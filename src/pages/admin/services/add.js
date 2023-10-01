import { Button } from '@chakra-ui/react';
import { cloneDeep } from 'lodash';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useIDGenerator } from '../../../hooks/useIDGenerator';
import { selectProfSlice } from '../../../store/admin/professionals/professionals';
import { saveData } from '../../../store/admin/services/async';
import {
  serviceActions,
} from '../../../store/admin/services/services';
import { selectServiceSlice } from '../../../store/admin/services/services';
import { getServicesList } from '../../../store/admin/services/utils';
import { FormInput } from '../../../uiElements/FormInput';
import { FormInputNumber } from '../../../uiElements/FormInputNumber';
import { FormInputSelect } from '../../../uiElements/FormInputSelect';
import { Tags } from '../../../uiElements/Tags';
import { Form, FormWrapper } from './services.style';
import { validateServiceData } from './validators';

const requiredFields = [
  {
    dataIndex: 'name',
    message: 'Name is Required',
  },
  {
    dataIndex: 'duration',
    message: 'Durations is Required (min 30 max 90)',
  },
  {
    dataIndex: 'price',
    message: 'Price is Required',
  },
  {
    dataIndex: 'professionalID',
    message: 'Professiona is Required',
  },

]

export const AddService = () => {
  const [errors, setErrors] = useState({});
  const { baseData, list: serviceList } = useSelector(selectServiceSlice);
  const { list: profsList } = useSelector(selectProfSlice);
  const dispatch = useDispatch();
  const [genID] = useIDGenerator();

  const initProfOptions = profsList.map(item => ({id: item.id, title: item.name}));

  const onValueChange  = (value,key) => {
    const clonedData = cloneDeep(baseData);
    const uuid = genID();
    if (!clonedData.id)  {
      clonedData.id = uuid;
    }
    clonedData[key] = value;
    dispatch(serviceActions.baseDataRefresh(clonedData));

  }

  const onProfessional  = (item,selected) => {
    const clonedData = cloneDeep(baseData);
    const uuid = genID();
    if (!clonedData.id)  {
      clonedData.id = uuid;
    }
    if (selected) {
      clonedData.professionalID.push(item.id);
    } else {
      clonedData.professionalID = clonedData.professionalID.filter(id => id !== item.id )
    }
    dispatch(serviceActions.baseDataRefresh(clonedData));

  }



  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateServiceData(baseData, requiredFields);

    if (errors) {
      setErrors(errors);
      return;
    } else {
      setErrors({})
    }
    saveData(baseData);
    const clonedList = cloneDeep(serviceList);
    clonedList.push(baseData);
    dispatch(serviceActions.listRefresh(clonedList));
    dispatch(serviceActions.baseDataReset());

  }
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <FormInput
          errors={errors}
          name={'name'}
          label={'Name'}
          placeholder={'Name'}
          value={baseData.name}
          onChange={(e) => onValueChange(e.target.value, 'name')}
        />
        <FormInputNumber
          errors={errors}
          name={'duration'}
          label={'Duration (minutes)'}
          placeholder={'Duration'}
          min={30}
          max={90}
          onChange={(value) => onValueChange(Number(value), 'duration')}
        />

        <FormInputNumber
          errors={errors}
          name={'price'}
          label={'Price'}
          placeholder={'Price'}
          onChange={(value) => onValueChange(Number(value), 'price')}
        />

        <div>
          Select Professionals
          <Tags
            selected={baseData.professionalID}
            list={profsList}
            onSelect={(item) => onProfessional(item, true)}
            onDeselect={(item) => onProfessional(item, false)}
          />
        </div>
        {/*<FormInputSelect*/}
        {/*  name={'professionalID'}*/}
        {/*  label={'Select Professional'}*/}
        {/*  optionsList={initProfOptions}*/}
        {/*  onChange={(e) => onValueChange(e.target.value, 'professionalID')}*/}
        {/*/>*/}
        <Button variant={'solid'} type={'submit'}> Save </Button>

      </Form>
    </FormWrapper>
  )
}
