import React, {ButtonHTMLAttributes} from 'react'

export enum ButtonView {
  danger = 'danger',
  default = 'default'
}

export enum ButtonPurpose {
  edit = 'edit',
  clip = 'clip',
  delete = 'delete',
  save = 'save',
  ok = 'ok',
  common = 'common'
}

export interface IButtonProps extends ButtonHTMLAttributes<Element>{
  purpose?: ButtonPurpose
  view?: ButtonView
}

export const ButtonIcons = new Map<ButtonPurpose, React.ReactNode>([
  [ButtonPurpose.delete, <i className="far fa-trash-alt" />],
  [ButtonPurpose.edit, <i className="far fa-edit" />],
  [ButtonPurpose.save, <i className="far fa-save" />],
  [ButtonPurpose.clip, <i className="fas fa-paperclip"/>],
  [ButtonPurpose.ok, <i className="fas fa-check"/>],
  [ButtonPurpose.common, null],
])
