import React from 'react';
import About from './About';

const user = {
  name: 'Liza',
  city: 'New York',
  bio: 'I made this!',
  color: 'firebrick',
  links: {
    github: 'https://github.com/liza',
    linkedin: 'https://www.linkedin.com/in/liza/',
  },
};

function App() {
  return (
    <div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
      </nav>
      <div id="home">
        <h1 style={{ color: user.color }}>
          {user.name} is a Web Developer from {user.city}
        </h1>
      </div>
      <div id="about">
        <About bio={user.bio} links={user.links} />
      </div>
    </div>
  );
}

export default App;