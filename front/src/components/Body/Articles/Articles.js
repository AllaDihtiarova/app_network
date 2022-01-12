import { useParams } from 'react-router-dom'
import PageHeading from '../../PageHeading/PageHeading'

export default function Articles() {
  let params = useParams()
  console.log(params)

  return (
    <>
      <PageHeading text="Articles" />
      {!isNaN(params.id) ? <h2>Article: {params.id}</h2> : null}
    </>
  )
}
