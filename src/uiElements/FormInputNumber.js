import {
  FormErrorMessage,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper
} from '@chakra-ui/react';
import { useState } from 'react';


export const FormInputNumber = (props) => {
  const { value, label, name, onChange, placeholder, errors = {}, ...other } = props;
  const [touched, setIsTouched] = useState(false);

  const onChangeHandler = (e, ...props) => {
    setIsTouched(true);
   typeof onChange === 'function' && onChange(e, ...props);
  }

  return (
    <>
      <NumberInput
        value={value}
        onChange={onChangeHandler}
        isInvalid={errors[name]}
        {...other}
      >
        <FormLabel>{label}</FormLabel>
        <NumberInputField />
        <NumberInputStepper>
          {/*<NumberIncrementStepper />*/}
          {/*<NumberDecrementStepper />*/}
        </NumberInputStepper>
        <FormErrorMessage>{errors[name] }</FormErrorMessage>
      </NumberInput>

      <FormErrorMessage>{errors[name] }</FormErrorMessage>

    </>

  )
}
