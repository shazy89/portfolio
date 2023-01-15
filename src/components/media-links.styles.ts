import { theme } from 'theme'
import { Property } from 'csstype'
import { css } from '@emotion/css'

export const container = (direction: Property.FlexDirection) => css`
  display: flex;
  flex-direction: ${direction};
  gap: ${theme.space.s600};
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`

export const bottomLine = css`
  width: 2.8rem;
  border-bottom: 3px solid ${theme.color.yellow100};
`
export const sideLine = css`
  height: 2.8rem;
  border-left: 3px solid ${theme.color.yellow100};
`

export const text = (writingMode: Property.WritingMode) => css`
  writing-mode: ${writingMode};
  color: ${theme.color.text};
`
