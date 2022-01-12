import { useParams } from 'react-router-dom'
import PageHeading from '../../PageHeading/PageHeading'

export default function Articles() {
  let params = useParams()
  const { id } = params

  return (
    <>
      <PageHeading text="Articles" />
      {!isNaN(id) && <h2>Article: {id}</h2>}
    </>
  )
}
