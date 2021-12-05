import React from 'react'
import Layout from '@/Pages/Layout'
import { Head } from '@inertiajs/inertia-react'

const Index = (props) => {
  const users = props.data 
  return (
    <>
      <Head title="Users index" />
      <h1>Welcome</h1>
      <p>This page is users index!</p>
      <div>
        {users.map((user) => (
            <p key={user.id}>name: {user.name}, email: {user.email}</p>
        ))}
      </div>
    </>
  )
}

Index.layout = page => <Layout children={page} title="Users" />

export default Index
