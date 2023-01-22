import { theme } from 'theme'
import { Property } from 'csstype'
import { mq } from './mixins/media-queries'
import { css } from '@emotion/css'

export const container = (direction: Property.FlexDirection) => css`
  display: flex;
  flex-direction: ${direction};
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;

  ${mq.mobile} {
    gap: ${theme.space.s300};
  }
  ${mq.desktop} {
    gap: ${theme.space.s600};
  }
`

export const bottomLine = css`
  border-bottom: 3px solid ${theme.color.yellow100};

  ${mq.mobile} {
    width: 1.6rem;
  }
  ${mq.desktop} {
    width: 2.8rem;
  }
`
export const sideLine = css`
  height: 2.8rem;
  border-left: 3px solid ${theme.color.yellow100};
`

export const text = (writingMode: Property.WritingMode) => css`
  writing-mode: ${writingMode};
  color: ${theme.color.text};
`
