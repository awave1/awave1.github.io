import React from 'react';
import { Toolbar } from "../Toolbar/Toolbar";
import { Waves } from "../Waves/Waves";
import { Wrapper, Content, ContentWrapper } from './style';
import { PageProps } from './types';

const Page = ({ children }: PageProps) => (
  <Wrapper>
    <ContentWrapper>
      <Toolbar />
      <Content>{children}</Content>
    </ContentWrapper>
    <Waves />
  </Wrapper>
);

export default Page;
