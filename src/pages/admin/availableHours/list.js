import { useSelector } from 'react-redux';
import { ListTable } from '../../../components/ListTable/ListTable';
import { selectHoursSlice } from '../../../store/admin/availableHours/services';
import { selectProfSlice } from '../../../store/admin/professionals/professionals';


export const List  = () => {
  const { list } = useSelector(selectHoursSlice);
  const cols = [
    {
    title: 'Professional',
    dataIndex: 'professionalID'
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
