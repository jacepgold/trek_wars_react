import React, { Component } from 'react';
import { List, Button, Input } from 'semantic-ui-react';
import axios from 'axios';

class Character extends Component {
  state = { editing: false, name: this.props.character.name };

  toggleEdit = (cancel = false) => {
    if(cancel)
      this.setState({ name: this.props.character.name });

    this.setState({ editing: !this.state.editing });
    
  }

  editCharacter = () => {
    // figure out how to get the updated name of the character
    axios.put(`/api/characters/${this.props.character.id}`, { character: { name: this.state.name } })
      .then( res => {
          this.toggleEdit();
      }).catch ( res => {
        console.log(res)
      }
    );

  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    const { name } = this.state;
    if ( this.state.editing ) 
      return(
        <List.Item>
          <Input type='text' defaultValue={ name } onChange={ this.handleChange } placeholder={ name } />
          <Button onClick={ () => this.toggleEdit(true) }>Cancel</Button>
          <Button primary onClick={ this.editCharacter }>Save</Button>
        </List.Item>
      );
    else
      return(
        <List.Item onClick={ this.toggleEdit }>
          <h3>{ name }</h3>
        </List.Item>  
      );
  }
}

export default Character;