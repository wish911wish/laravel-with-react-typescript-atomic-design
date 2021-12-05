import React, { useEffect } from 'react'
import { Link } from '@inertiajs/inertia-react'

export default function Layout({ children }) {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/user">User</Link>
      </header>
      <article>{children}</article>
    </main>
  )
}
