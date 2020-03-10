import React from 'react';
import api from '~/services/api';

// import { Container } from './styles';

export default function Dashbord() {
  api.get('appointments');
  return <h1>Dashbord</h1>;
}
