import {Component} from 'react'
import Loader from 'react-loader-spinner'

import Package from '../Package'

class TravelGuide extends Component {
  state = {isLoading: true, packagesList: []}

  componentDidMount() {
    this.getTravelGuide()
  }

  getTravelGuide = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const fetchedData = await response.json()

    const packageData = fetchedData.packages.map(data => ({
      description: data.description,
      id: data.id,
      imageUrl: data.image_url,
      name: data.name,
    }))
    this.setState({isLoading: false, packagesList: packageData})
  }

  render() {
    const {isLoading, packagesList} = this.state

    return (
      <div>
        <h1>Travel Guide</h1>
        <div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          ) : (
            <ul>
              {packagesList.map(details => (
                <Package details={details} key={details.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TravelGuide
