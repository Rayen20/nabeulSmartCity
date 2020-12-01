import Search from "./Search";
import React from 'react'

class Newcom extends React.Component {
    render() {
      return(
          <Search
       google={this.props.google}
       center={{lat: 18.5204, lng: 73.8567}}
       height='300px'
       zoom={15}
      />
        )
    }
  }

export default Newcom