import React, { Component } from 'react';
import StarTrekLogo from '../images/star-trek-logo.png';

class Startrek extends Component {

  render() {
    return(
      <div>
        <img style={ styles.logo } src={ StarTrekLogo } alt="Star Trek Logo" />
      </div>
    )
  }
}

const styles = {
  logo: {
    width: '150px',
  }
}

export default Startrek;