import React from "react";
import { useQuery } from 'react-query'

import PageHeading from "../../components/PageHeading/PageHeading";
import Profile from "../../components/Body/Profile/Profile";
import { getUser } from "../api/crud";

const UsersContainer = () => {
  const { isFetching, data } = useQuery('users', () => getUser())
  const users = data?.data || []
  
  return (
    <>
      <PageHeading text="Users" />
      <ul>
        {users.map((user) => (<li key={ user.id}><Profile firstName={user.first_name} lastName={user.last_name} id={ user.id}/></li>))}
      </ul>
      {isFetching && <div>Loading...</div>}
    </>
  )
}

export default UsersContainer