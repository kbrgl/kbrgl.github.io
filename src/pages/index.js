// @flow
import React from 'react'
import { graphql } from 'gatsby'
import styled, { css } from 'styled-components'

import { rhythm } from '../utils/typography'

import Layout from '../components/Layout'
import VerticalMargin from '../components/VerticalMargin'
import Container from '../components/Container'
import FontAwesome from '../components/FontAwesome'
import Image from '../components/Image'

import nodejs from '../images/skills/nodejs.svg'
import gatsby from '../images/skills/gatsby.svg'
import react from '../images/skills/react.svg'
import python from '../images/skills/python.svg'
import ruby from '../images/skills/ruby.svg'
import go from '../images/skills/go.svg'
import splash from '../images/kabir.jpg'

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

const Splash = () => (
  <div
    style={{
      width: 70,
      height: 70,
    }}
  >
    <Image
      data={{
        src: splash,
        aspectRatio: 1,
      }}
    />
  </div>
)

const Header = () => (
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
      {isToday(birthday) ? '🎉' : ''}
    </h1>
    <p style={{ marginBottom: 0 }}>
      16 year old developer, designer, creator &amp; US politics junkie from New
      Delhi, India. Member at <a href="https://exunclan.com">Exun Clan</a>.{' '}
      <span aria-label="" role="img">
        🌝
      </span>
    </p>
  </section>
)

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  border-bottom: 0;
  color: #a6a6ab;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #3d29f5;
  }
`

type SocialProps = {
  media: Object[],
}
const Social = ({ media }: SocialProps) => {
  const socialIcons = media.map((info, index) => (
    <li
      key={info.name}
      style={{
        display: 'inline-block',
        marginRight: index !== media.length - 1 ? 16 : 0,
      }}
    >
      <SocialLink href={info.url}>
        <FontAwesome icon={info.icon ? info.icon : info.name} />
      </SocialLink>
    </li>
  ))

  return (
    <ul
      style={{
        listStyleType: 'none',
        margin: 0,
      }}
    >
      {socialIcons}
    </ul>
  )
}

const SectionHeading = styled.h2`
  border-bottom: 1px solid #eaeaef;
  padding-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`

const About = () => (
  <section>
    <SectionHeading>About Me</SectionHeading>
    <p>
      I&#39;ve always enjoyed building (and breaking!) stuff, and I&#39;ve loved
      writing code ever since I found out there&#39;s a way to experience the
      thrill of creating beautiful things without having to move for extended
      periods of time. I&#39;m a huge US politics junkie: I enjoy learning about
      political processes &amp; institutions and their impact on American
      citizens.
    </p>
  </section>
)

const Education = () => (
  <section>
    <SectionHeading>Education</SectionHeading>
    <p>
      I&#39;m a student in 11th grade at Delhi Public School, R.K. Puram, and a
      member of the computer club, the quizzing club and the debating society.
      I&#39;ve got physics, math, economics, and computer science as my primary
      subjects; I decided to take economics over chemistry because I found it
      more fascinating, and although my main interests lie in the sciences, I
      liked the idea of having a humanities subject.
    </p>
    <p>
      I&#39;ve won over 25 high-school technology quizzes, design events and
      hackathons, and I&#39;m currently the defending national champion of the
      Texas Instruments Science &amp; Technology Quiz.
    </p>
  </section>
)

const Work = () => (
  <section>
    <SectionHeading>Work &amp; Projects</SectionHeading>
    <ul>
      <li>
        <a href="https://github.com/kbrgl/wayfer">
          Wayfer &mdash; cross platform file transfer app
        </a>
      </li>
      <p>
        Wayfer allows you to transfer a file by dropping it on the window and
        scanning a QR code it gives you. Still a work in progress &mdash; only
        the core functionality has been implemented so far.
      </p>
      <p>Written in Electron.</p>
      <li>
        <a href="https://exunclan.com">Exun Clan website</a>
      </li>
      <p>
        The website of my school&#39;s computer club, Exun Clan, which has more
        than 25 years of history and a legacy as the most prestigious
        high-school computer club in India.
      </p>
      <p>Written in Gatsby.</p>
      <li>
        <a href="https://exun.co/app">Exun 2018 app</a>
      </li>
      <p>
        An app to view schedules, live updates, and more at Exun 2018, Exun
        Clan&#39;s 2018 edition of its annual event. 58,000+ notifications were
        delivered to participants from across the country using my app.
      </p>
      <p>
        The app was written in React Native, the server was written in the Koa
        framework, and the admin (for pushing updates) was written in React.
      </p>
    </ul>
  </section>
)

const SkillImage = styled.img.attrs({
  alt: '',
})`
  margin-bottom: 0;
  margin-right: 4px;
  height: 1em;
`

const skillsInfo = [
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

const Skills = () => (
  <section>
    <SectionHeading>Skills</SectionHeading>
    <div>
      {skillsInfo.map(skill => (
        <div key={skill.title}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div style={{ display: 'flex' }}>
              <SkillImage src={skill.image} />
              <h3>{skill.title}</h3>
            </div>
            <span
              style={{
                fontSize: '0.9em',
                color: '#86868b',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}
            >
              {skill.duration}
            </span>
          </div>
          <p>{skill.body}</p>
        </div>
      ))}
    </div>
  </section>
)

const Misc = () => (
  <section>
    <SectionHeading>Misc</SectionHeading>
    <ul>
      <li>
        <a href="https://github.com/kbrgl/dotfiles">Dotfiles</a>
      </li>
      <p>
        My dotfiles from back when I was on Arch Linux. (I&#39;ve since switched
        to macOS.)
      </p>
      <li>
        <a href="https://www.npmjs.com/~kbrgl">NPM packages</a>
      </li>
      <p>
        NPM packages I&#39;ve published. Mostly some basic modules that I
        couldn&#39;t find anywhere else, so I wrote them myself.
      </p>
    </ul>
  </section>
)

const hiddenMixin = `
  opacity: 0;
  font-size: 0;
  margin: 0;
  padding: 0;
  transition: opacity 0.15s, font-size 0.3s 0.15s, margin 0.3s 0.15s,
      padding 0.3s 0.15s;
`
const visibleMixin = `
  transition: font-size 0.15s, margin 0.15s, padding 0.15s, opacity 0.3s 0.15s;
`
const fadeInOut = css`
  ${props => (!props.visible ? hiddenMixin : visibleMixin)};
  transition-timing-function: ease-in-out;
`
const MetaBody = styled.p`
  ${fadeInOut};
`

class Meta extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      expanded: false,
    }
  }

  render() {
    const { expanded } = this.state

    return (
      <section>
        <h2>
          <button
            style={{
              color: '#3d29f5',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
            onClick={() =>
              this.setState({
                expanded: !expanded,
              })
            }
            type="button"
          >
            <div style={{ width: '1em' }}>{expanded ? '−' : '+'}</div> Meta
          </button>
        </h2>
        <MetaBody visible={expanded}>
          The website you&#39;re looking at right now has been around since
          September 2015. I&#39;ve used it as a testbed for my ideas: new
          designs, libraries and more. You can find every change I&#39;ve ever
          made to this website{' '}
          <a href="https://github.com/kbrgl/kbrgl.github.io">on GitHub</a>.
        </MetaBody>
      </section>
    )
  }
}

const FooterWrapper = styled.footer`
  color: #86868b;
`

const Footer = () => <FooterWrapper>© 2018 Kabir Goel</FooterWrapper>

type IndexPageProps = {
  data: {
    site: {
      siteMetadata: {
        socialMedia: Object[],
      },
    },
  },
}
const IndexPage = ({
  data: {
    site: {
      siteMetadata: { socialMedia },
    },
  },
}: IndexPageProps) => (
  <Layout>
    <Container maxWidth={512}>
      <VerticalMargin top={128} bottom={128}>
        <Splash />
        <VerticalMargin top={rhythm(2)}>
          <Header />
        </VerticalMargin>
        <VerticalMargin top={rhythm(1)}>
          <Social media={socialMedia} />
        </VerticalMargin>
        <VerticalMargin top={96}>
          <About />
        </VerticalMargin>
        <VerticalMargin top={64}>
          <Education />
        </VerticalMargin>
        <VerticalMargin top={64}>
          <Work />
        </VerticalMargin>
        <VerticalMargin top={64}>
          <Skills />
        </VerticalMargin>
        <VerticalMargin top={64}>
          <Misc />
        </VerticalMargin>
        <VerticalMargin top={64}>
          <Meta />
        </VerticalMargin>
        <VerticalMargin top={64}>
          <Footer />
        </VerticalMargin>
      </VerticalMargin>
    </Container>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        socialMedia {
          name
          url
          icon
        }
      }
    }
  }
`

export default IndexPage
