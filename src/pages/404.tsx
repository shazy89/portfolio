import * as React from 'react'
import { cx } from '@emotion/css'
import { Heading } from 'components/typography/heading'
import { Text } from 'components/typography/text'
import { Page } from 'components/layout/containers/page'
import { Screen } from 'components/layout/containers/screen'
import { Area } from 'components/layout/containers/area'
import { button, anchorStyles } from 'components/button/button.styles'
import { Link, HeadFC } from 'gatsby'

const NotFoundPage = () => {
  return (
    <Page>
      <Screen backgroundColor={'black'} border='primary' borderRadius='radiusLarge'>
        <Area alignItems='center' justifyContent='center' height='100%'>
          <Heading tag='h1' size='700'>
            Page not found
          </Heading>
          <Text size='s500'>Sorry 😔, we couldn’t find what you were looking for.</Text>
          <Area>
            <Link className={cx(button, anchorStyles)} to='/'>
              Go home
            </Link>
          </Area>
        </Area>
      </Screen>
    </Page>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
