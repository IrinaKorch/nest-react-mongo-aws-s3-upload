import React, {FC, HTMLAttributes} from 'react'
import classes from './FilePreview.module.sass'
import File, {FileType} from '../File/File'
import { v4 as uuid } from 'uuid'


interface IFileContainerProps extends HTMLAttributes<HTMLDivElement> {
  word?: File[]
  pdf?: File[]
  txt?: File[]
  excel?: File[]
  powerPoint?: File[]
  audios?: File[]
  videos?: File[]
  imageFiles?: File[]
  archives?: File[]
  others?: File[]
}


const FilePreview:FC<IFileContainerProps> = (props: IFileContainerProps) => {
  const {word, pdf, excel, txt, powerPoint, audios, videos, imageFiles, archives, others} = props

  return (
    <div className={classes.FilePreview}>
      {word && word.map(item => <File key={uuid()} type={FileType.word} file={item}/>)}
      {pdf && pdf.map(item => <File key={uuid()} type={FileType.pdf} file={item}/>)}
      {txt && txt.map(item => <File key={uuid()} type={FileType.txt} file={item}/>)}
      {excel && excel.map(item => <File key={uuid()} type={FileType.excel} file={item}/>)}
      {powerPoint && powerPoint.map(item => <File key={uuid()} type={FileType.powerPoint} file={item}/>)}
      {audios && audios.map(item => <File key={uuid()} type={FileType.audio} file={item}/>)}
      {videos && videos.map(item => <File key={uuid()} type={FileType.video} file={item}/>)}
      {imageFiles && imageFiles.map(item => <File key={uuid()} type={FileType.image} file={item}/>)}
      {archives && archives.map(item => <File key={uuid()} type={FileType.archive} file={item}/>)}
      {others && others.map(item => <File key={uuid()} type={FileType.other} file={item}/>)}
    </div>
  )
}

export default FilePreview
