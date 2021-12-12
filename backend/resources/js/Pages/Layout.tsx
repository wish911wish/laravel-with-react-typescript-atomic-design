import React from 'react'
import { Link } from '@inertiajs/inertia-react'

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/user">User</Link>
      </header>
      <article>{props.children}</article>
    </main>
  )
}

export default Layout
