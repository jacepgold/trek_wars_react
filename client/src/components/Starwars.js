import React, { Component } from 'react';
import StarWarsLogo from '../images/star-wars-logo.png';
import axios from 'axios';
import { Grid, List } from 'semantic-ui-react';
import Character from './Character';

class Starwars extends Component {
  state = { characters: [], locations: [] };

  // Lifecycle method
  componentDidMount() {
    axios.get('/api/characters?nerd_type=starwars')
      .then(res => {
        this.setState({ characters: res.data })
      })
      .catch(res => {
        console.log(res.data);
      });
  }

  displayCharacters = () => {
    return this.state.characters.map(character => {
      return ( <Character character={ character } /> )
    });
  }

  render() {
    return (
      <div>
        <img style={styles.logo} src={StarWarsLogo} alt='StarWars Logo' />
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <h1>Characters</h1>
              <List bulleted>
                {this.displayCharacters()}
              </List>
            </Grid.Column>
            <Grid.Column width={8}>
              <h1>Locations</h1>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

const styles = {
  logo: {
    width: '150px',
  }
}

export default Starwars;