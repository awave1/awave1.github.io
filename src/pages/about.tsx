import React from 'react';
import Page from "../components/Page/Page";
import { List, ListLink } from "../components/List/List";

export default function AboutPage() {
  return (
    <Page>
      <h1>About</h1>
      <p>
        Here are links to my social media. Come say hi! (and follow my
        SoundCloud{" "}
        <span>
          💯
        </span>
        )
      </p>

      <List>
        <ListLink to="https://github.com/awave1">/github</ListLink>
        <ListLink to="https://www.linkedin.com/in/artem-golovin-749793a5/">
          /linkedin
        </ListLink>
        <ListLink to="https://twitter.com/awaveawave">/twitter</ListLink>
        <ListLink to="https://soundcloud.com/awave1/tracks">
          /soundcloud
        </ListLink>
      </List>
    </Page>
  );
}
