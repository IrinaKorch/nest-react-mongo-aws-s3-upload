import React, {FC} from 'react'
import classes from './ImageInput.module.sass'
import {IImageInputProps} from './ImageInputTypes'


const ImageInput: FC<IImageInputProps> = (props: IImageInputProps) => {
  return (
    <>
      <label htmlFor={props.id} className={classes.ImageInput}>
        <i className="fa-solid fa-camera"/>
        <input type="file" {...props.register} accept='image/*' {...props} className={[props.className, classes.ImageInput].join(' ')}/>
      </label>
    </>

  )
}

export default ImageInput
