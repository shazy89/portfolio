import * as React from 'react'
import { Text } from './typography/text'

type CopyProps = {
  children: React.ReactNode
  onCopy?: () => void
  text: string
  label?: string
}

export const Copy = ({ children, onCopy, text, label }: CopyProps) => {
  const [isCopiedToClipboard, setIsCopiedToClipboard] = React.useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(text)
    setIsCopiedToClipboard(true)

    if (onCopy) {
      onCopy()
    }
  }

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsCopiedToClipboard(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [isCopiedToClipboard])

  return (
    <button aria-label={label} onClick={copyToClipboard}>
      <Text tag='span'> {isCopiedToClipboard ? 'Copied To Clipboard!' : children}</Text>
    </button>
  )
}
