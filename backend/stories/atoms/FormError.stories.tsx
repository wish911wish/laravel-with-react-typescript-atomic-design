import { ComponentStory, ComponentMeta } from '@storybook/react'

import FormError from '@/Components/Atoms/FormError'

export default {
  title: 'Atoms/FormError',
  component: FormError,
} as ComponentMeta<typeof FormError>

const Template: ComponentStory<typeof FormError> = (args) => <FormError {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'The text of the error.',
}
