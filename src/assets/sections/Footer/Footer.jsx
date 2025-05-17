import styles from './FooterStyles.module.css'
function Footer() {
  return (
    <footer id='footer' className={styles.container}>
      <p>
        © 2025 Yaniv Blitzman.<br />
        All rights reserved.
      </p>
    </footer>
  )
}

export default Footer