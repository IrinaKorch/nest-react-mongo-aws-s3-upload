import React from 'react'
import classes from './Button.module.sass'
import {ButtonIcons, ButtonPurpose, ButtonView, IButtonProps} from './ButtonTypes'


function Button(props: IButtonProps) {

  const purpose: ButtonPurpose = props.purpose ?? ButtonPurpose.common
  const view: ButtonView = props.view ?? ButtonView.default
  const icon = ButtonIcons.get(purpose)

  const className: string = [classes.Button, classes[purpose], classes[view]].join(' ')

  return (
    <button className={className} {...props}>{props.children} {icon}</button>
  )
}

export default Button
