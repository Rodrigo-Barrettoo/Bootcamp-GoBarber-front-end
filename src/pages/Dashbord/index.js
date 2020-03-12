import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
// import api from '~/services/api';

import { Container, Time } from './styles';

export default function Dashbord() {
  return (
    <Container>
      <header>
        <button type="submit">
          <MdChevronLeft size={36} color="#fff" />
        </button>
        <strong>31 de maio</strong>
        <button type="submit">
          <MdChevronRight size={36} color="#fff" />
        </button>
      </header>

      <ul>
        <Time past>
          <strong>08:00</strong>
          <span>Rodrigo</span>
        </Time>
        <Time available>
          <strong>09:00</strong>
          <span>Em aberto</span>
        </Time>
        <Time>
          <strong>10:00</strong>
          <span>Rodrigo</span>
        </Time>
        <Time>
          <strong>11:00</strong>
          <span>Rodrigo</span>
        </Time>
      </ul>
    </Container>
  );
}
