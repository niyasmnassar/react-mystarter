import React from 'react';
import { Link } from 'react-router';
import { version } from '../../package.json';

const Home = ({ children }) => (
  <div>
    <header>
      <p>well, this is the home page!</p>
      <h1>React Starterify {version}</h1>
      <p>Yo we did it!</p>
      <div>Go to built</div>
      <Link to="/about">About</Link>
      <Link to="/poweredby">Powered by</Link>
      <Link to="/Services">Services</Link>
      <Link to="/Contact">Contact</Link>
    </header>
    <section>
      {children || 'Welcome to React Starterify'}
    </section>
    <main>
      jsaojdfjsaoijdfjasd
    </main>
  </div>
);

Home.propTypes = { children: React.PropTypes.object };

export default Home;
