import React from "react";
import { useQuery } from 'react-query'

import PageHeading from "../../components/PageHeading/PageHeading";
import UsersList from "../../components/Body/UsersList/UsersList";
import { getUsers } from "./api/crud";

const UsersListContainer = () => {
  const { isFetching, data } = useQuery('users', () => getUsers())
  const users = data?.data || []
  
  return (
    <>
      <PageHeading text="Users" />
      <ul>
        {users.map((user) => (<li key={ user.id}><UsersList firstName={user.first_name} lastName={user.last_name} id={ user.id}/></li>))}
      </ul>
      {isFetching && <div>Loading...</div>}
    </>
  )
}

export default UsersListContainer