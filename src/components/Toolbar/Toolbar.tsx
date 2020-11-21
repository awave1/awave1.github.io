import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { WaveEmoji } from '../Waves/Waves';
import { ListLink, Link } from '../List/List';
import { Nav, NavLinks } from './style';

export const Toolbar = () => (
  <header>
    <Nav>
      <Link useRouter className="home" to="/">
        <WaveEmoji className="wave" />
      </Link>
      <NavLinks>
        <ListLink useRouter to="/about">
          About
        </ListLink>
        <ListLink useRouter to="/work">
          Work
        </ListLink>
        <ListLink to="https://github.com/awave1">
          <FontAwesomeIcon icon={faGithub} />
        </ListLink>
      </NavLinks>
    </Nav>
  </header>
);
