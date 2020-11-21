import styled from 'styled-components';
import { Link } from "react-router-dom";

export const A = styled.a`
  color: black;
  text-decoration: none;
  padding: 5px;
  transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border-radius: 5px;
  }
`;

export const RouterLink = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 5px;
  transition: 200ms all cubic-bezier(0.075, 0.82, 0.165, 1);
  cursor: pointer;

  &:hover {
    background-color: black;
    color: white;
    border-radius: 5px;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const ListItem = styled.li`
  margin: 5px 0;
  padding: 5px 0;
`;