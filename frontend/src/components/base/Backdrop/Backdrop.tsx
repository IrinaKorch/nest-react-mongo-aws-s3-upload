import classes from './Backdrop.module.sass'
import React, {HTMLAttributes} from 'react'

interface IBackdropProps extends HTMLAttributes<HTMLDivElement> {

}

function Backdrop(props: IBackdropProps) {

  const classNames: string = [classes.Backdrop, props.className].join(' ')

  return (
    <div {...props} className={classNames}/>
  )
}

export default Backdrop
