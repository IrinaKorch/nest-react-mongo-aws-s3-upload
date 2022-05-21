import React, {FormHTMLAttributes} from 'react'

export interface IFormProps extends FormHTMLAttributes<Element>{
  children?: React.ReactNode
}
