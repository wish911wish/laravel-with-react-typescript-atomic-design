import * as React from 'react'

type Props = {
  text: string
  for?: string
}

const Label: React.FC<Props> = (props: Props) => {
  return <label htmlFor={props.for}>{props.text}</label>
}

export default Label
