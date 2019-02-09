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
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
      }}
    >
      <h1
        style={{
          marginBottom: rhythm(0.5),
          fontSize: '2rem',
        }}
        className="title"
      >
        <span style={{ color: '#2b65d4' }}>kabir goel&nbsp;</span>
      </h1>
      <span
        style={{
          marginBottom: rhythm(0.5),
          fontSize: '1.6rem',
        }}
      >
        <span style={{ fontWeight: '300' }}>&mdash;&nbsp;maker.</span>{' '}
        {isToday(birthday) ? (
          <span aria-label="" role="img" alt="Confetti emoji">
            🎉
          </span>
        ) : (
          ''
        )}
      </span>
    </div>
    <p style={{ marginBottom: 0 }}>
      16 year old designer and developer from New Delhi, India. Member at{' '}
      <a href="https://exunclan.com">Exun Clan</a>.{' '}
      <span aria-label="" role="img" alt="Moon emoji">
        🌝
      </span>
    </p>
  </section>
)

export default Bio
