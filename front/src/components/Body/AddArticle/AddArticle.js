import { useParams } from 'react-router-dom'
import PageHeading from '../../PageHeading/PageHeading'

export default function AddArticle() {
  let params = useParams()
  const { img } = params

  return (
    <>
      <PageHeading text="Add post" />
      {/.doc$/.test(img) || /.pdf$/.test(img) || /.jpeg$/.test(img) ? (
        <h2>Profile: {img}</h2>
      ) : null}
    </>
  )
}
