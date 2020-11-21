import React from 'react';
import { LinkProps, ListLinkProps } from './types';
import { A, RouterLink, List, ListItem } from './style';

export function Link({ to, children, useRouter, className }: LinkProps) {
  if (useRouter) {
    return (
      <RouterLink to={to} className={className}>
        {children}
      </RouterLink>
    );
  }

  return (
    <A
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </A>
  );
}

export function ListLink({ to, children, useRouter }: ListLinkProps) {
  return (
    <ListItem>
      <Link to={to} useRouter={!!useRouter}>
        {children}
      </Link>
    </ListItem>
  );
}

export { List };