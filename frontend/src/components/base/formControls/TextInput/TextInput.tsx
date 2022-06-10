import classes from './TextInput.module.sass'
import React, {FC} from 'react'
import { IInputProps } from './TextInputTypes'



const TextInput: FC<IInputProps> = (props: IInputProps) => {

  return (
    <div className={classes.TextInput}>
      {props.label ? <label className={classes.label} htmlFor={props.name}>{props.label}</label> : null}
      <input type="text" {...props} {...props.register} className={[props.className, classes.input, !props.label && classes.lonely].join(' ')}/>
    </div>
  )
}

export default TextInput
