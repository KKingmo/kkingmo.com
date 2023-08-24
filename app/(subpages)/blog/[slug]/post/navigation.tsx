import Link from '@components/link'
import { Post } from '@lib/types'

import styles from './navigation.module.css'

const Navigation = ({ previous, next }: { previous?: Post; next?: Post }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.previous}>
        {previous && (
          <Link href={`/blog/${previous.slug}`}>
            <div className={styles.title}>← 이전</div>
            {previous.title}
          </Link>
        )}
      </div>

      <div className={styles.next}>
        {next && (
          <Link href={`/blog/${next.slug}`}>
            <div className={styles.title}>다음 →</div>
            {next.title}
          </Link>
        )}
      </div>
    </div>
  )
}

export default Navigation
