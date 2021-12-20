import * as React from 'react'
import InputText from '@/Components/Atoms/InputText'
import FormError from '@/Components/Atoms/FormError'
import Label from '@/Components/Atoms/Label'

type Props = {
  value: string
  name?: string
  label?: string
  require?: boolean
  placeholder?: string
  onChange: (input: string) => void
  onBlur?: () => void
  error: string | null | undefined
}

const FieldText: React.FC<Props> = (props: Props) => {
  const [value, setValue] = React.useState(props.value)

  React.useEffect(() => {
    setValue(props.value)
  }, [props.value])

  React.useEffect(() => {
    props.onChange(value)
  }, [value])

  return (
    <div>
      {props.label && <Label text={props.label} for={props.name} />}
      <InputText value={value} name={props.name} onChange={(input: string) => setValue(input)} />
      <FormError text={props.error || ''} />
    </div>
  )
}

export default FieldText
