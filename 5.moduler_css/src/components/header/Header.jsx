import React from 'react'

import styles from "./Header.module.css"
const Header = () => {
  return (
    <>
    <div className={styles.header}>
        <h3>React.js</h3>
        <button onClick={()=>window.open("https://www.youtube.com/")} className={styles.btn}>Login</button>
    </div>
    </>
  )
}

export default Header