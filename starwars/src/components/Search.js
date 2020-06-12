import React, {useState, useEffect} from 'react';
import axios from 'axios'
import styled from "styled-components"
import { render } from 'react-dom';

const EnterButton = styled.button``

const SearchBox = () => {
    const [characterData, characterResponse] = useState([])
    const [characterNumber, changeCharacterNumber] = useState(1)
    const [input] = useState("")
    useEffect (() => {
      axios.get(`https://swapi.dev/api/people/?search=${this.state.input}/`)
        .then(res => {
          characterResponse(res.data)
          })
        .catch(err => {
          debugger
          })
    }, [characterNumber])
      
    return(
        <div className="SearchBox">
            <input placeholder="Search for a character..." value={input}></input>
            <EnterButton onClick={()=> changeCharacterNumber(characterNumber + 1)}>Enter</EnterButton>
        </div>
        )
    };
  
  export default SearchBox;