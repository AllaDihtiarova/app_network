import { useParams } from 'react-router-dom'
import PageHeading from '../../PageHeading/PageHeading'

export default function Profile() {
  let params = useParams()
  console.log(params)

  return (
    <>
      <PageHeading text="Profile" />
      {/^\w+$/.test(params.title) &&
      params.title === params.title.toUpperCase() ? (
        <h2>Article: {params.title}</h2>
      ) : null}
    </>
  )
}
