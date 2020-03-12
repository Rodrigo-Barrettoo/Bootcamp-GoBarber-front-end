import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notfications from '~/components/Notfications';

import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-purple.svg';

export default function Header() {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Notfications />

          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={
                profile.avatar === null
                  ? 'https://api.adorable.io/avatars/50/abott@adorable.png'
                  : profile.avatar.url
              }
              alt="Rodrigo Maia"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
