import React from 'react'
import User from '@/Types/User'
import Layout from '@/Pages/Layout'

interface Props {
  users: User[]
}

const Index: React.FC<Props> = (props: Props) => {
  return (
    <Layout>
      <h1>Welcome</h1>
      <p>This page is users index!</p>
      <div>
        {props.users.map((user) => (
          <p key={user.id}>
            name: {user.name}, email: {user.email}
          </p>
        ))}
      </div>
    </Layout>
  )
}

export default Index
