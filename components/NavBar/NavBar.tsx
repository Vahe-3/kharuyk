import React from 'react'
import styles from "./NavBar.module.scss"

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        
    <div className={styles.content}>

      <div className={styles.links}>

      <div>Home</div>
      <div>Tours</div>
      <div>Blog</div>
      <div>Abot as</div>
      <div>Contacts</div>

      </div>
    
    </div>
  </nav>
  )
}

export default NavBar