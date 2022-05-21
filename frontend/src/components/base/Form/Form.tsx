import classes from './Form.module.sass'
import React from 'react'
import {IFormProps} from './FormTypes'


const Form: React.FC<IFormProps> = (props) => {
  return (
    <form className={classes.Form} {...props}>
      {props.children}
    </form>
  )
}

export default Form
