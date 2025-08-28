import React from 'react'
import styles from './textfield.module.css'

function textfield({type="text",placeholder,value,onChange}) {
  return (
     <input className={styles.textfield}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

export default textfield
