import * as React from 'react'

type SEOProps = {
  children?: React.ReactNode
}
export const SEO = ({ children }: SEOProps) => (
  <>
    <title>Erdoan Shaziman - Web Developer | Portfolio and Blog</title>
    <meta
      name='description'
      content='Developer with experience building Full-Stack web and mobile applications that include Javascript, Typescript, React, React Native, Redux, Express js, Ruby, Rails, HTML5, CSS3, SASS, Mongo Db, GQL, and PostgreSQL.'
    />
    <meta
      name='keywords'
      content='Erdoan Shaziman, Ed Shaziman, Web Developer, Software Engineer, Portfolio Website, New Jersey, Javascript, Typescript, React, React Native, Redux, Express js, Ruby, Rails, HTML5, CSS3, SASS, Mongo Db, GQL, PostgreSQL, About me, Resume, CV, Blog, Contact, Services, Experience, Education, Skills, References'
    />
    <meta name='author' content='Erdoan Shaziman' />
    <meta name='robots' content='index, follow' />
    <link rel='canonical' href='https://www.example.com/webpage' />
    {children}
  </>
)
