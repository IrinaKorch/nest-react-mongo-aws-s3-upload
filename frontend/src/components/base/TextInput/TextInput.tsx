import classes from './TextInput.module.sass'
import React, {FC, useState} from 'react'
import { IInputProps } from './TextInputTypes'



const TextInput: FC<IInputProps> = (props: IInputProps) => {

  const [value, setValue] = useState<string>('')
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className={classes.TextInput}>
      {props.label ? <label className={classes.label} htmlFor={props.name}>{props.label}</label> : null}
      <input className={classes.input} type="text" value={value} onChange={changeHandler} {...props}/>
    </div>
  )
}

export default TextInput
