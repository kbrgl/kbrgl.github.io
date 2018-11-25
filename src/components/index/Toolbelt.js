import React from 'react'
import styled from 'styled-components'

import InfoText from '../InfoText'

import SectionHeading from './SectionHeading'

import nodejs from '../../images/toolbelt/nodejs.svg'
import gatsby from '../../images/toolbelt/gatsby.svg'
import react from '../../images/toolbelt/react.svg'
import python from '../../images/toolbelt/python.svg'
import ruby from '../../images/toolbelt/ruby.svg'
import go from '../../images/toolbelt/go.svg'

const ToolImage = styled.img.attrs({
  alt: '',
})`
  margin-bottom: 0;
  margin-right: 4px;
  height: 1em;
`

const ToolbeltInfo = [
  {
    image: nodejs,
    title: 'Node.js',
    body: (
      <span>
        Node.js is my core skill. I find it incredibly useful: it allows me to
        write websites, servers and desktop &amp; mobile applications, all
        without breaking out of the ecosystem. Most of the projects I&#39;ve
        worked on for the past 2 years have been in Node.
      </span>
    ),
    duration: '3 years',
  },
  {
    image: react,
    title: 'React & React Native',
    body: (
      <span>
        I use React for most frontend projects. I&#39;m also familiar with
        associated libraries like Redux and Redux Saga. (I dabbled in Vue for a
        few small projects, but didn&#39;t find it to be as versatile.) I built
        the Exun 2018 app in React Native.
      </span>
    ),
    duration: '2 years',
  },
  {
    image: gatsby,
    title: 'Gatsby',
    body: (
      <span>
        Gatsby is an incredibly flexible static site generator. I use it for
        most of my static frontend projects, including the one you&#39;re
        looking at right now.
      </span>
    ),
    duration: '1 year',
  },
  {
    image: python,
    title: 'Python',
    body: (
      <span>
        Python is the first programming language I ever learnt, and it&#39;s
        still one of the languages I know best. I mostly use Python for number
        crunching and one-off jobs now.
      </span>
    ),
    duration: '5 years',
  },
  {
    image: go,
    title: 'Golang',
    body: (
      <span>
        I&#39;ve got a working knowledge of Go. I&#39;ve used it for a few small
        projects, like a toy shell, a basic compiler and a web server.
      </span>
    ),
    duration: '3 years',
  },
  {
    image: ruby,
    title: 'Ruby',
    body: (
      <span>
        I know Ruby fairly well. I use it for shell scripting, since I don&#39;t
        like Bash. I&#39;m also familiar with Rails, and I used it to build an
        platform for online cryptic hunts.
      </span>
    ),
    duration: '4 years',
  },
]

const Toolbelt = () => (
  <section>
    <SectionHeading>Toolbelt</SectionHeading>
    <div>
      {ToolbeltInfo.map(skill => (
        <div key={skill.title}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex' }}>
              <ToolImage src={skill.image} />
              <h3>{skill.title}</h3>
            </div>
            <InfoText>{skill.duration}</InfoText>
          </div>
          <p>{skill.body}</p>
        </div>
      ))}
    </div>
  </section>
)

export default Toolbelt
