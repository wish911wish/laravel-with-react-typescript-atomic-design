import * as React from 'react'

type Props = {
  errors: string[]
}

const Label: React.FC<Props> = (props: Props) => {
  return (
    <div>
      {props.errors.map((error) => (
        <p>{error}</p>
      ))}
    </div>
  )
}

export default Label
