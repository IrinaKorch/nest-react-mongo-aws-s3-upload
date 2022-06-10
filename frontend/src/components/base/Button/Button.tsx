import React from 'react'
import classes from './Button.module.sass'
import {ButtonIcons, ButtonPurpose, ButtonView, IButtonProps} from './ButtonTypes'


function Button(props: IButtonProps) {
  const {round, className} = props
  const purpose: ButtonPurpose = props.purpose ?? ButtonPurpose.common
  const view: ButtonView = props.view ?? ButtonView.default
  const icon = ButtonIcons.get(purpose)

  const classNames: string = [classes.Button, classes[purpose], classes[view], round && classes.round, className].join(' ')

  if (purpose === ButtonPurpose.back) {
    return <button type="button" {...props} className={classNames}>{icon}{props.children}</button>
  }
  return (
    <button type="button" {...props} className={classNames}>{props.children}{icon}</button>
  )
}

export default Button
