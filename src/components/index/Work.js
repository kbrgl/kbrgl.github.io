import React from 'react'

import SectionHeading from './SectionHeading'
import ListItemHeading from './ListItemHeading'

const Work = () => (
  <section>
    <SectionHeading>Work &amp; Projects</SectionHeading>
    <ul>
      <li>
        <ListItemHeading>
          <a href="https://github.com/kbrgl/wayfer">
            Wayfer &mdash; cross platform file transfer app
          </a>
        </ListItemHeading>
        <p>
          Wayfer allows you to transfer a file by dropping it on the window and
          scanning a QR code it gives you. Still a work in progress &mdash; only
          the core functionality has been implemented so far.
        </p>
        <p>Written in Electron.</p>
      </li>
      <li>
        <ListItemHeading>
          <a href="https://exunclan.com">Exun Clan website</a>
        </ListItemHeading>
        <p>
          The website of my school&#39;s computer club, Exun Clan, which has
          more than 25 years of history and a legacy as the most prestigious
          high-school computer club in India.
        </p>
        <p>Written in Gatsby.</p>
      </li>
      <li>
        <ListItemHeading>
          <a href="https://exun.co/app">Exun 2018 app</a>
        </ListItemHeading>
        <p>
          An app to view schedules, live updates, and more at Exun 2018, Exun
          Clan&#39;s 2018 edition of its annual event. 58,000+ notifications
          were delivered to participants from across the country using my app.
        </p>
        <p>
          The app was written in React Native, the server was written in the Koa
          framework, and the admin (for pushing updates) was written in React.
        </p>
      </li>
    </ul>
  </section>
)

export default Work
