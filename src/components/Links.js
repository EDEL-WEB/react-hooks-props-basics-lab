import React from 'react';

function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      <ul>
        <li>
          <a href="https://www.google.com">Google</a>
        </li>
        <li>
          <a href="https://www.facebook.com">Facebook</a>
        </li>
        <li>
          <a href="https://www.twitter.com">Twitter</a>
        </li>
        {github && (
          <li>
            <a href={github}>{github}</a>
          </li>
        )}
        {linkedin && (
          <li>
            <a href={linkedin}>{linkedin}</a>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Links;