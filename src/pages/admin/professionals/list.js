import { useSelector } from 'react-redux';
import { ListTable } from '../../../components/ListTable/ListTable';
import { selectProfSlice } from '../../../store/admin/professionals/professionals';


export const List  = () => {
  const { list } = useSelector(selectProfSlice);
  const cols = [
    {
    title: 'Name',
    dataIndex: 'name'
  },
  {
    title: 'Surname',
    dataIndex: 'lastName'
  },
  {
    title: 'ID',
    dataIndex: 'id'
  },


  ]
  return (
    <div>
    <ListTable
        columns={cols}
        data={list}
    />
    </div>
  )
}
