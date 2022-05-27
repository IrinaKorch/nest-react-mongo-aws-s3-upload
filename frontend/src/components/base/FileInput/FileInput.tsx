import React, {ChangeEvent, FC, useRef} from 'react'
import classes from './FileInput.module.sass'
import {IFileInputProps} from './FileInputTypes'
import PhotoCollage from '../PhotoCollage/PhotoCollage'
import {useImages} from '../../../hooks/useImages'


const FileInput: FC<IFileInputProps> = (props: IFileInputProps) => {
  const inputRef = useRef(null)
  const {sources, fromEvent} = useImages()


  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    fromEvent(event)
  }


  return (
    <>
      <label htmlFor={props.id} className={classes.FileInput}>
        <i className="fas fa-paperclip"/>
        <p>{sources.length ?? "empty"}</p>
        <input type="file" ref={inputRef} onChange={changeHandler} {...props} className={[props.className, classes.DateInput].join(' ')}/>
      </label>
      <PhotoCollage images={sources}/>
    </>

  )
}

export default FileInput
