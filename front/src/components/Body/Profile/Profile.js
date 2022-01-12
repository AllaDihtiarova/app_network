import { useParams } from 'react-router-dom'
import PageHeading from '../../PageHeading/PageHeading'

export default function Profile() {
  let params = useParams()
  const { title } = params

  return (
    <>
      <PageHeading text="Profile" />
      {/^[A-Z]+\D\w+$/.test(title) && <h2>Profile: {title}</h2>}
    </>
  )
}
