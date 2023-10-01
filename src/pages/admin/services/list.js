import { HStack } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { ListTable } from '../../../components/ListTable/ListTable';
import { selectProfSlice } from '../../../store/admin/professionals/professionals';
import { selectServiceSlice } from '../../../store/admin/services/services';

const CUSTOM_CELL = {
  professional: 'professionalID'
}

export const List  = () => {
  const { list } = useSelector(selectServiceSlice);
  const { list: profsList } = useSelector(selectProfSlice);
  const cols = [
    {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Price',
    dataIndex: 'price'
  },
  {
    title: 'Duration (minutes)',
    dataIndex: 'duration'
  },
  {
    title: 'Professionals',
    dataIndex: 'professionalID'
  },
  {
    title: 'id',
    dataIndex: 'id'
  },
  ]

  const initCols = (initialCols = cols) => {
    return cols.map(item => {
      if (item.dataIndex === CUSTOM_CELL.professional){
        return {
          ...item,
          renderCell: (row) => {
            const profCandidate = profsList.filter(item => row.professionalID.includes(item.id) );
            if (profCandidate && profCandidate.length) {
              return (
                <HStack>
                  {profCandidate.map(prof => {
                    return <p> {prof.name}</p>;
                  })
                  }
                </HStack>
            )
            }
            return  'N/A'
          }
        }
      }
      return  item;
    })
  }

  return (
    <div>
    <ListTable
        columns={initCols(cols)}
        data={list}
    />
    </div>
  )
}
