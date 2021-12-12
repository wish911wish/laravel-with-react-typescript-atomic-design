import * as React from 'react'

type Props = {
  text: string
}

const Label: React.FC<Props> = (props: Props) => {
  return <label>{props.text}</label>
}

export default Label
