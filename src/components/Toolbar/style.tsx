import styled from 'styled-components';
import { List } from "../List/List";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-bottom: 30px;
  height: 80px;

  .home {
    display: flex;
    align-self: center;

    .wave {
      align-self: center;
    }

    &:hover {
      background-color: #009abd;
    }
  }
`;

export const NavLinks = styled(List)`
  display: flex;
  align-self: center;
`;