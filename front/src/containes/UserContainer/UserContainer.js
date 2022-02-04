import { useParams } from "react-router-dom"
import {useQuery} from "react-query"

import PageHeading from '../../components/PageHeading/PageHeading'
import User from '../../components/Body/User/user'
import { getUserById } from "./api/crud"

const UserContainer = () => {
  const { userId } = useParams()
  const { isFetching, data } = useQuery(`users/${userId}`, () => getUserById(userId))
  const user = data?.data || []
  const userData = {
    name: user[0]
  }
     
  return (
    <>
      <PageHeading text={`User ${userId}`} />
      <ul>
        {user.map((us) => (<li key={us.id}><User firstName={us.first_name} lastName={us.last_name} birthday={us.birthday} createDate={us.create_date} gender={ us.gender} userData={userData.name}/></li>))}
      </ul>
      {/* <ul>
        {user.map((log) => (<li key={ log.id}><User userData={userData.name}/></li>))}
      </ul> */}
      
      {isFetching && <div>Loading...</div>}
    </>
  )
}

export default UserContainer