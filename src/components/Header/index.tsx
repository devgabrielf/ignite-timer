import * as S from './styles';

import logoIgnite from '../../assets/logo-ignite.svg';
import { Scroll, Timer } from 'phosphor-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  return (
    <S.HeaderContainer>
      <img
        src={logoIgnite}
        alt="Logo do Ignite composto por dois triângulos verdes"
      />

      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </S.HeaderContainer>
  );
}
