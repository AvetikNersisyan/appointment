import { FormErrorMessage, FormLabel, Select } from '@chakra-ui/react';
import { VerticalStack } from './elements.styles';


export const FormInputSelect  = (props) => {
    const { optionsList = [], onChange, errors = {}, name,  label } = props;

    const renderOptions = (list) => {
      return (
        list.map(item => <option value={item.id}> {item.title}</option>)
      )
    }
  return (
    <VerticalStack>
      <FormLabel>{label}</FormLabel>
      <Select onChange={onChange} placeholder={label} isInvalid={errors[name]}>
        {renderOptions(optionsList)}
      </Select>
      <FormErrorMessage>{errors[name] }</FormErrorMessage>
    </VerticalStack>

  )
}
