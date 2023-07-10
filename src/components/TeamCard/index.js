import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  console.log('card')
  const {details} = props
  const {name, id, teamImageURL} = details
  console.log(name)

  return (
    <li className="team-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageURL} alt={name} className="team-logo" />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
