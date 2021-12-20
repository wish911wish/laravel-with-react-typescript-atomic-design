/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import * as React from 'react'

const style = css({
  color: 'red',
})

type Props = {
  text: string
}

const Label: React.FC<Props> = (props: Props) => {
  return <p css={style}>{props.text}</p>
}

export default Label
