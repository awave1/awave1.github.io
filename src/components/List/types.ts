import { ReactNode } from 'react';

export type LinkProps = {
  to: string;
  useRouter?: boolean;
  children?: ReactNode | string;
  className?: string;
};

export type ListLinkProps = {
  to: string;
  children?: ReactNode;
  useRouter?: boolean;
};
