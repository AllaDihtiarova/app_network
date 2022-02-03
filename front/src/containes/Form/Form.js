import { useParams } from "react-router-dom"
import { useQuery } from "react-query"

import PageHeading from "../../components/PageHeading/PageHeading";
import UserForm from "../../components/Form/Form";
import { getLogins } from "../Form/api/crud";

const UserFormContainer = () => {
  const { loginId } = useParams()
  const { data } = useQuery(`logins/${loginId}`, () => getLogins(loginId))
  const login = data?.data || []
  const userData = {
    name: login[0]
  }
  
  return (
    <>
      <PageHeading text="Form" />
      <ul>
        {login.map((log) => (<li key={ log.id}><UserForm userData={userData.name}/></li>))}
      </ul>
    </>
  )
}

export default UserFormContainer