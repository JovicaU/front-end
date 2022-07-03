import React from 'react';
import './App.css';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faUpload } from '@fortawesome/free-solid-svg-icons';
import { MainMenue } from '../MainMenue/MainMenue';

function App() {
  return (
    <Container>
      <FontAwesomeIcon icon = {faHouse}/> Home

      <FontAwesomeIcon icon = {faUpload}/> Upload

    </Container>
  );
}

export default App;
