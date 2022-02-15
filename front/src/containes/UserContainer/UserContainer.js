import { useParams } from "react-router-dom"
import {useQuery} from "react-query"

import PageHeading from '../../components/PageHeading/PageHeading'
import User from '../../components/Body/User/user'
import { getUserById } from "./api/crud"

const UserContainer = () => {
  const { userId } = useParams()
  const { isFetching, data } = useQuery(`users/${userId}`, () => getUserById(userId))
  const user = data?.data || {}
  const userData = {
    name: user
  }
     
  return (
    <>
      <PageHeading text={`User ${userId}`} />
      <User firstName={user.first_name} lastName={user.last_name} birthday={user.birthday} createDate={user.create_date} gender={ user.gender} userData={userData.name}/>  
      {isFetching && <div>Loading...</div>}
    </>
  )
}

export default UserContainer