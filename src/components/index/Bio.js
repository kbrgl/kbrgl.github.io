import React from 'react'

import { rhythm } from '../../utils/typography'

import Tagline from './Tagline'

const birthday = new Date(1016908200000)
function isToday(date, _today) {
  let today = _today
  if (today === undefined) {
    today = new Date()
  }
  let res = false
  const m = today.getMonth() - date.getMonth()
  if (m === 0) {
    const d = today.getDate() - date.getDate()
    if (d === 0) {
      res = true
    }
  }
  return res
}

const Bio = () => (
  <section>
    <h1
      style={{
        marginBottom: rhythm(0.5),
      }}
    >
      Kabir Goel{' '}
      <span style={{ fontWeight: 'normal' }}>
        &mdash;&nbsp;
        <Tagline
          items={[
            'designer & developer.',
            'serial procrastinator.',
            'on by default.',
          ]}
        />
      </span>{' '}
      {isToday(birthday) ? (
        <span aria-label="" role="img" alt="Confetti emoji">
          🎉
        </span>
      ) : (
        ''
      )}
    </h1>
    <p style={{ marginBottom: 0 }}>
      16 year old developer, designer, creator, amateur pyromaniac &amp;
      American politics enthusiast from New Delhi, India. Member at{' '}
      <a href="https://exunclan.com">Exun Clan</a>.{' '}
      <span aria-label="" role="img" alt="Moon emoji">
        🌝
      </span>
    </p>
  </section>
)

export default Bio
