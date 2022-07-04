import React from 'react';
import { Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse} from '@fortawesome/free-solid-svg-icons';

function HomePage() {
  return (
    <Container>
      <FontAwesomeIcon icon = {faHouse}/> Home
    </Container>
  );
}

export default HomePage;
