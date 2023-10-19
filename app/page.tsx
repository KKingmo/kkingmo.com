import Socials from '@components/socials'
import styles from './page.module.css'
import TimeOfDay from './timer'
import { Suspense } from 'react'
import { PostListRSC } from '@components/posts-list/rsc'
import Posts from '@components/posts-list'

export const revalidate = 10800

export default async function HomePage() {
  return (
    <>
      <div className={styles.heading}>
        <span className={styles.headingText}>
          <h1>Kingmo</h1>
          <h2>Developer</h2>
        </span>
        <Socials />
      </div>
      {/* <h3 className={styles.secondHeading}>About me</h3> */}
      {/* <h3>My projects</h3> */}
      <h3>My posts</h3>
      <Suspense fallback={<Posts skeleton />}>
        <PostListRSC paginate={true} />
      </Suspense>
      <footer className={styles.footer}>
        <span></span>
        <TimeOfDay />
      </footer>
    </>
  )
}
