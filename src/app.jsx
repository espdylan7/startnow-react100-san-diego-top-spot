import React, { Component } from 'react';
import axios from 'axios'
import TopSpot from './topspot';

export class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          topspots: []
      };
  }
  componentWillMount() {
      axios
      .get('https://origin-top-spots-api.herokuapp.com/api/topspots')
      .then(response => response.data)
      .then(topspots => this.setState({ topspots }))
  }

  

  render() {
    return (
      <div className='card'>
        <div className= 'container bg-light'>
        <h1>San Diego Top Spots</h1>
        <p>A list of the top 30 places to see in San Diego, California.</p>
      </div>
      {/* <div className='container'> */}
      <div className='card'>
      { 
    this.state.topspots.map(topspot => (
          <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location} />
    ))
}
      </div>
      </div>
    // </div>
    
  );
  }
}

export default App;
