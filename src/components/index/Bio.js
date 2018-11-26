import React from 'react'

import { rhythm } from '../../utils/typography'

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
        &mdash; designer &amp; developer.
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
      16 year old developer, designer, creator &amp; US politics junkie from New
      Delhi, India. Member at <a href="https://exunclan.com">Exun Clan</a>.{' '}
      <span aria-label="" role="img" alt="Moon emoji">
        🌝
      </span>
    </p>
  </section>
)

export default Bio