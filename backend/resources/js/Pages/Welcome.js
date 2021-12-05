import React from 'react'
import Layout from '@/Pages/Layout'
import { Head } from '@inertiajs/inertia-react'

const Welcome = () => {
  return (
    <>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>Hello, welcome to your first Inertia app!</p>
    </>
  )
}

Welcome.layout = page => <Layout children={page} title="Welcome" />

export default Welcome
