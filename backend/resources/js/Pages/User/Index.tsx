import React from 'react'
import User from '@/Types/User'
import Layout from '@/Pages/Layout'

interface Props {
  data: User[]
}

const Index: React.FC<Props> = (props: Props) => {
  const users = props.data
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>This page is users index!</p>
      <div>
        {users.map((user) => (
          <p key={user.id}>
            name: {user.name}, email: {user.email}
          </p>
        ))}
      </div>
    </Layout>
  )
}

export default Index
