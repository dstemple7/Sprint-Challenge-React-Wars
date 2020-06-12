import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from "styled-components"
import './App.css';

const PreviousButton = styled.button``
const NextButton = styled.button``
const EnterButton = styled.button``

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    axios.get(`https://swapi.dev/api/people/?search=${this.state.value}/`)
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
      </form>
    );
  }
}

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, characterResponse] = useState([])
  const [characterNumber, changeCharacterNumber] = useState(1)
  const [searchInput, changeSearchInput] = useState("")
  
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect (() => {
    axios.get(`https://swapi.dev/api/people/${characterNumber}/`)
      .then(res => {
        characterResponse(res.data)
        })
      .catch(err => {
        debugger
        })
  }, [characterNumber])

  return (
    <div className="App">
    <NameForm />  {/* <form>
        <label> Search:
        <input type="text" name="name" placeholder="E.g. Luke"/>
        </label>
        <input type="submit" value="Submit" />
      </form> */}
     <input type="submit" onClick={() => changeCharacterNumber(characterNumber)}/>
     <h1 className="Header">React Wars</h1>
      <div>
        <br></br>
        Name: {characterData.name}
        <br></br>
        Height: {characterData.height}
        <br></br>
        Mass: {characterData.mass}
        <br></br>
        Hair Color: {characterData.hair_color}
        <br></br>
        Skin Color: {characterData.skin_color}
        <br></br>
        Eye Color: {characterData.eye_color}
        <br></br>
        Birth Year: {characterData.birth_year}
        <br></br>
        Gender: {characterData.gender}
        <br></br>
        {/* {characterData.homeworld}
        <br></br>
        {characterData.films}
        <br></br>
        {characterData.species}
        <br></br>
        {characterData.vehicles}
        <br></br>
        {characterData.starships}
        <br></br> */}
        <br></br>
        <br></br>
        <br></br>
        <PreviousButton onClick={() => changeCharacterNumber(characterNumber -1)}>Previous Character</PreviousButton>
        <NextButton onClick={() => changeCharacterNumber(characterNumber +1)}>Next Character</NextButton>
      </div>
    </div>
  );
}

export default App;

//83 is last character

//{"name":"Luke Skywalker","height":"172","mass":"77","hair_color":"blond","skin_color":"fair","eye_color":"blue","birth_year":"19BBY","gender":"male","homeworld":"http://swapi.dev/api/planets/1/","films":["http://swapi.dev/api/films/1/","http://swapi.dev/api/films/2/","http://swapi.dev/api/films/3/","http://swapi.dev/api/films/6/"],"species":[],"vehicles":["http://swapi.dev/api/vehicles/14/","http://swapi.dev/api/vehicles/30/"],"starships":["http://swapi.dev/api/starships/12/","http://swapi.dev/api/starships/22/"],"created":"2014-12-09T13:50:51.644000Z","edited":"2014-12-20T21:17:56.891000Z","url":"http://swapi.dev/api/people/1/"}