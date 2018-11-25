import React from 'react'

import SectionHeading from './SectionHeading'
import ListItemHeading from './ListItemHeading'

const Misc = () => (
  <section>
    <SectionHeading>Misc</SectionHeading>
    <ul>
      <li>
        <ListItemHeading>
          <a href="https://github.com/kbrgl/dotfiles">Dotfiles</a>
        </ListItemHeading>
        <p>
          My dotfiles from back when I was on Arch Linux. (I&#39;ve since
          switched to macOS.)
        </p>
      </li>

      <li>
        <ListItemHeading>
          <a href="https://www.npmjs.com/~kbrgl">NPM packages</a>
        </ListItemHeading>
        <p>
          NPM packages I&#39;ve published. Mostly some basic modules that I
          couldn&#39;t find anywhere else, so I wrote them myself.
        </p>
      </li>
    </ul>
  </section>
)

export default Misc
