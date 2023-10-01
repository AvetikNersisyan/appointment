import { HStack, Tag, TagCloseButton, TagLabel } from '@chakra-ui/react';
import { useState } from 'react';


export const Tags = (props) => {
  const { list, selected: selectedIDs, onDeselect, onSelect } = props;
  const onClose = (item) => {
    onDeselect && onDeselect(item);
  };

  const onClick = (item) => {
    onSelect && onSelect(item);
  };
  return (
    <HStack style={{alignItems: 'center', cursor: 'pointer'}} spacing={4} >
      {list.map((item) => (
        <Tag
          size={'lg'}
          key={item.id}
          borderRadius="full"
          variant="solid"
          colorScheme={selectedIDs.includes(item.id) ? 'green' : 'red'}
        >
          <TagLabel
            onClick={() => onClick(item)}
          >
            {item.name}
          </TagLabel>
          <TagCloseButton style={{marginTop: 0}} onClick={() => onClose(item)}/>
        </Tag>
      ))}
    </HStack>
  );
};
