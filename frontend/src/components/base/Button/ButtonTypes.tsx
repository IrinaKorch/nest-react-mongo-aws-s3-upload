import React, {ButtonHTMLAttributes} from 'react'

export enum ButtonView {
  danger = 'danger',
  default = 'default',
  dark = 'dark',
  transparent = 'transparent'
}

export enum ButtonPurpose {
  edit = 'edit',
  clip = 'clip',
  delete = 'delete',
  save = 'save',
  ok = 'ok',
  previous = 'previous',
  next = 'next',
  close = 'close',
  back = 'back',
  common = 'common'
}

export interface IButtonProps extends ButtonHTMLAttributes<Element>{
  purpose?: ButtonPurpose
  view?: ButtonView
  round?: boolean
}

export const ButtonIcons = new Map<ButtonPurpose, React.ReactNode>([
  [ButtonPurpose.delete, <i className="far fa-trash-alt" />],
  [ButtonPurpose.edit, <i className="far fa-edit" />],
  [ButtonPurpose.save, <i className="far fa-save" />],
  [ButtonPurpose.clip, <i className="fas fa-paperclip"/>],
  [ButtonPurpose.ok, <i className="fas fa-check"/>],
  [ButtonPurpose.previous, <i className="fa-solid fa-chevron-left"/>],
  [ButtonPurpose.next, <i className="fa-solid fa-chevron-right"/>],
  [ButtonPurpose.close, <i className="fa-solid fa-xmark"/>],
  [ButtonPurpose.back, <i className="fa-solid fa-arrow-left-long"/>],
  [ButtonPurpose.common, null],
])
