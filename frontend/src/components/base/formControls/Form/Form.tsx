import classes from './Form.module.sass'
import React from 'react'
import {IFormProps} from './FormTypes'


const Form: React.FC<IFormProps> = (props) => {
  return (
    <form {...props} className={[props.className, classes.Form].join(' ')}>
      {props.children}
    </form>
  )
}

export default Form
