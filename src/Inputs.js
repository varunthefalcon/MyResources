import React, { Component } from 'react';
import { Input } from 'semantic-ui-react'
import './App.css';
import { connect } from "react-redux";
import { handleLanguageInput } from "./actions"
class App extends Component {

  handleLanguage = (e) => { this.props.handleLanguageInput({ language: e.target.value }) }
  render() {
    return (
      <div>
        <Input onChange={this.handleLanguage} value={this.props.language} list='languages' placeholder='Choose language...' />
        <datalist id='languages'>
          <option value='English' />
          <option value='Chinese' />
          <option value='Dutch' />
        </datalist>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    language: state.language
  }
}
export default connect(mapStateToProps, { handleLanguageInput })(App);