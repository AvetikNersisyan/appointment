import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input
} from '@chakra-ui/react';
import { useState } from 'react';


export const FormInput = (props) => {
  const { value, label, name, onChange, placeholder, errors = {} } = props;
  const [touched, setIsTouched] = useState(false);
  const onChangeHandler = (e, ...props) => {
    setIsTouched(true);
   typeof onChange === 'function' && onChange(e, ...props);
  }

  return (
    <FormControl isInvalid={errors[name] && touched}>
      <FormLabel>{label}</FormLabel>
      <Input value={value} onChange={onChangeHandler} placeholder={placeholder} />
      <FormErrorMessage>{errors[name]}</FormErrorMessage>
    </FormControl>
  )
}
