import React from 'react'
import User from '@/Types/User'
import Layout from '@/Pages/Layout'
import FieldText from '@/Components/Molecules/FieldText'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as y from 'yup'
import { Inertia } from '@inertiajs/inertia'

interface Props {
  data: User[]
}

const validationSchema = y.object().shape({
  name: y
    .string()
    .matches(/^[0-9a-zA-Z]+$/, '半額英数字のみ')
    .required(),
  email: y.string().email().required(),
})

const Index: React.FC<Props> = (props: Props) => {
  const { handleSubmit, control } = useForm<User>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  })

  const onSubmit = (data: User) => {
    Inertia.post('/user', data)
  }

  return (
    <Layout>
      <h1>User register page</h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="name"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FieldText value={value} onChange={(input: string) => onChange(input)} error={error?.message} />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => (
              <FieldText value={value} onChange={(input: string) => onChange(input)} error={error?.message} />
            )}
          />
          <input type="submit" value="登録" />
        </form>
      </div>
    </Layout>
  )
}

export default Index
