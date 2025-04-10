import React from 'react';
import Links from './Links';

function About({ bio, links }) {
  return (
    <div>
      <h3>About Me</h3>
      {bio && bio.trim() !== "" && <p>{bio}</p>}
      <Links github={links.github} linkedin={links.linkedin} />
    </div>
  );
}

export default About;