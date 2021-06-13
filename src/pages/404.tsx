import * as React from 'react';
import { Link } from 'gatsby';
import { heading, page, paragraph, code } from './styles.css';

// markup
const NotFoundPage = () => {
  return (
    <main className={page}>
      <title>Not found</title>
      <h1 className={heading}>Page not found</h1>
      <p className={paragraph}>
        Sorry{' '}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{' '}
        we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code className={code}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
