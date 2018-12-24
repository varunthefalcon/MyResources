import React, { Component } from 'react';
import { Container, Header } from 'semantic-ui-react'
import Inputs from "./Inputs";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Container textAlign="center">
          <Header as="h1" >Sharing</Header>

          <div>
            <Inputs />
          </div>
        </Container>
      </div>
    );
  }
}

export default App;
