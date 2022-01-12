import { useParams } from 'react-router-dom'

export default function CheckDate() {
  let params = useParams()
  const { date } = params

  return <>{Date.parse(date) < Date.now() && <h2>Date: {date}</h2>}</>
}
