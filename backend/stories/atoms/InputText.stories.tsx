import { ComponentStory, ComponentMeta } from '@storybook/react'

import InputText from '@/Components/Atoms/InputText'

export default {
  title: 'Atoms/InputText',
  component: InputText,
} as ComponentMeta<typeof InputText>

const Template: ComponentStory<typeof InputText> = (args) => <InputText {...args} />

export const Default = Template.bind({})
Default.args = {
  value: '',
  name: 'input_text',
  id: 'input_text',
  require: true,
  placeholder: 'placeholder',
}
