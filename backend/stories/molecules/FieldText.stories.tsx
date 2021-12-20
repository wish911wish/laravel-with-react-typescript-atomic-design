import { ComponentStory, ComponentMeta } from '@storybook/react'

import FieldText from '@/Components/Molecules/FieldText'

export default {
  title: 'Molecules/FieldText',
  component: FieldText,
} as ComponentMeta<typeof FieldText>

const Template: ComponentStory<typeof FieldText> = (args) => <FieldText {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '',
  name: 'field_text',
  label: 'Field Text',
  require: true,
  placeholder: 'placeholder',
}

export const WithError = Template.bind({})
WithError.args = {
  ...Default.args,
  error: 'error text',
}
