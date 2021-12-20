import * as React from 'react'

type Props = {
  value: string
  name?: string
  id?: string
  require?: boolean
  placeholder?: string
  onChange: (input: string) => void
  onFocus?: () => void
  onBlur?: () => void
}

const InputText: React.FC<Props> = (props: Props) => {
  const [value, setValue] = React.useState(props.value)

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  React.useEffect(() => {
    props.onChange(value)
  }, [value])

  return (
    <input
      id={props.id || props.name}
      name={props.name}
      type="text"
      placeholder={props.placeholder}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
      }}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
    />
  )
}

export default InputText
