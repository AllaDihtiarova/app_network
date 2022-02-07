import { useParams } from "react-router-dom"
import { useQuery } from "react-query"

import PageHeading from "../../components/PageHeading/PageHeading";
import UpdateLogin from "../../components/UpdateLogin/UpdateLogin";
import { getLogins } from "../UpdateLoginContainer/api/crud";

const UpdateLoginContainer = () => {
  const { loginId } = useParams()
  const { data } = useQuery(`logins/${loginId}`, () => getLogins(loginId))
  const login = data?.data || []
  const userData = {
    name: login[0]
  }
  
  return (
    <>
      <PageHeading text="Update login" />
      <ul>
        {login.map((log) => (<li key={ log.id}><UpdateLogin userData={userData.name}/></li>))}
      </ul>
    </>
  )
}

export default UpdateLoginContainer