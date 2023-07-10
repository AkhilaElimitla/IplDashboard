import {Component} from 'react'

import Loader from 'react-loader-spinner'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }

  componentDidMount() {
    this.getTeams()
  }

  getTeams = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const fetchedData = await response.json()
    const formattedData = fetchedData.teams.map(team => ({
      name: team.name,
      id: team.id,
      teamImageURL: team.team_image_url,
    }))

    console.log(formattedData)
    this.setState({
      teamsData: formattedData,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamsData} = this.state

    return (
      <ul className="teams-list" type="none">
        {teamsData.map(each => (
          <TeamCard key={each.id} teamDetails={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, teamsData} = this.state

    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
          </div>
          {isLoading ? (
            <div className="loader-container" data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} />
            </div>
          ) : (
            <div>
              <p>hai</p>
              <ul className="teams-list" type="none">
                {teamsData.map(each => (
                  <TeamCard key={each.id} details={each} />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default Home
