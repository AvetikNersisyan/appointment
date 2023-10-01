import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { NoData } from '../../uiElements/NoData';

const itemType = {
  dataIndex: '',
  title: '',
}

export const ListTable = (props) => {
  const { columns = itemType, data } = props;

  if (!data.length) {
    return  <NoData/>;
  }

  const columnsData = columns.map(item => {
    return <Th>{item.title}</Th>
  })

  const renderRow = (row) => {
   return  columns.map(({dataIndex, renderCell}) => {
     if (typeof renderCell === 'function') {
       return  <Td> {renderCell(row)}</Td>
     }
      return   <Td>{row[dataIndex]}</Td>
    })
  }
  const renderData = (data = []) => {
    return data.map(item => {
      return           <Tr>
        {renderRow(item)}
      </Tr>
    })
  }

  return (
    <TableContainer>
      <Table variant='simple'>
        <Thead>
          <Tr>
            {columnsData}
          </Tr>
        </Thead>
        <Tbody>
          {renderData(data)}
        </Tbody>
        <Tfoot>
          {columnsData}
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
