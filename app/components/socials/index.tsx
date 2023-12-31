import Link from '@components/link'

import styles from './socials.module.css'
import { GitHub, Mail } from '@components/icons'
import Tooltip from '@components/tooltip'
import ThemeSwitcher from '@components/theme-switcher'

type SocialButtonProps = {
  href: string
  icon: React.ReactNode
  tooltip: string
}

const SocialButton = ({ tooltip, href, icon }: SocialButtonProps) => {
  return (
    <Tooltip text={tooltip}>
      <Link href={href} className={styles.icon} external={true}>
        {icon}
      </Link>
    </Tooltip>
  )
}

const Socials = () => {
  return (
    <div className={styles.socials}>
      <ThemeSwitcher />
      <SocialButton
        href="https://github.com/kkingmo"
        icon={<GitHub strokeWidth={2} />}
        tooltip="GitHub"
      />
      <SocialButton
        href="mailto:55ooccmm@gmail.com"
        icon={<Mail strokeWidth={2} />}
        tooltip="Email"
      />
    </div>
  )
}

export default Socials
