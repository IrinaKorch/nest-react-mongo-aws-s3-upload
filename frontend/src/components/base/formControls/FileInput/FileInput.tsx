import React, {ChangeEvent, FC, InputHTMLAttributes, useState} from 'react'
import classes from './FileInput.module.sass'
import {UseFormRegister} from 'react-hook-form'

interface IFileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: any
}


const FileInput: FC<IFileInputProps> = (props: IFileInputProps) => {

  return (
    <>
      <label htmlFor={props.id} className={classes.FileInput}>
        <i className="fas fa-paperclip"/>
        <input
          type="file"
          {...props}
          {...props.register}
          className={[props.className, classes.FileInput].join(' ')}
        />
      </label>
    </>

  )
}

export default FileInput
