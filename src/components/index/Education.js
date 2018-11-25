import React from 'react'
import styled from 'styled-components'

import InfoText from '../InfoText'

import SectionHeading from './SectionHeading'

const Line = styled.div`
  height: 1px;
  flex: 1;
  background: transparent;
  margin: 3px 0;

  @media screen and (min-width: 400px) {
    background: #eaeaef;
    margin: 10px 10px;
  }
`

const SchoolInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.8rem;

  @media screen and (min-width: 400px) {
    flex-direction: row;
    align-items: center;
  }
`

type SchoolInfoProps = {
  name: string,
  duration: string,
}

const SchoolInfo = ({ name, duration }: SchoolInfoProps) => (
  <SchoolInfoWrapper>
    <h3
      style={{
        marginBottom: 0,
        textTransform: 'uppercase',
        fontSize: '0.9em',
      }}
    >
      {name}
    </h3>
    <Line />
    <InfoText>{duration}</InfoText>
  </SchoolInfoWrapper>
)

const Education = () => (
  <section>
    <SectionHeading>Education</SectionHeading>
    <SchoolInfo name="Delhi Public School, R.K. Puram" duration="2013—" />
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

export default Education
