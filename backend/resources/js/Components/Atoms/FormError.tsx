import * as React from 'react'

type Props = {
  text: string
}

const Label: React.FC<Props> = (props: Props) => {
  return <p>{props.text}</p>
}

export default Label
