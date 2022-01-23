import { useParams } from "react-router-dom"
import {useQuery} from "react-query"

import PageHeading from '../../components/PageHeading/PageHeading'
import ProfileUser from '../../components/Body/User/user'
import { getUserById } from "../api/crud"


const UserIdContainer = () => {
  const { userId } = useParams()
  const { isFetching, data } = useQuery(`users/${userId}`, () => getUserById(userId))
  const user = data?.data || []
    
  return (
    <>
      <PageHeading text={`User ${userId}`} />
      <ul>
        {user.map((us) => (<li key={us.id}><ProfileUser firstName={us.first_name} lastName={us.last_name} birthday={us.birthday} createDate={us.create_date} gender={ us.gender}/></li>))}
      </ul>
      
      {isFetching && <div>Loading...</div>}
    </>
  )
}

export default UserIdContainer