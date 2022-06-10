import React, {FC, HTMLAttributes} from 'react'
import classes from './InputGroup.module.sass'

interface IInputGroupProps extends HTMLAttributes<HTMLDivElement> {

}

const InputGroup: FC<IInputGroupProps> = (props) => {

  return (
    <div className={[props.className, classes.InputGroup].join(' ')}>
      {props.children}
    </div>
  )
}

export default InputGroup
