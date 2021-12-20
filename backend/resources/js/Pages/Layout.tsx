/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React from 'react'
import { Link } from '@inertiajs/inertia-react'

const style = css({
  display: 'flex',
  columnGap: '12px',
})

interface Props {
  children: React.ReactNode
}

const Layout: React.FC<Props> = (props: Props) => {
  return (
    <main>
      <header css={style}>
        <Link href="/">Home</Link>
        <Link href="/user">User</Link>
        <Link href="/user/create">User register</Link>
      </header>
      <article>{props.children}</article>
    </main>
  )
}

export default Layout
