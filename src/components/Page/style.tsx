import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 1) 0%,
    rgba(33, 33, 33, 1) 67%,
    rgba(33, 33, 33, 0.91) 100%
  );
  min-height: 100vh;

  * {
    color: #ffffff;
  }

  h1,
  h3,
  a {
    font-family: Hack, monospace;
    margin: 0;
  }
`;


export const ContentWrapper = styled.main`
  max-width: 760px;
  width: 85%;
  margin: 0 auto;
`;

export const Content = styled.div`
  flex-grow: 1;
`;
