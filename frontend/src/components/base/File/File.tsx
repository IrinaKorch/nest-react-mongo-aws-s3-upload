import React, {FC} from 'react'
import classes from './File.module.sass'

export enum FileType {
  word= 'word',
  txt= 'txt',
  pdf = 'pdf',
  excel = 'excel',
  powerPoint = 'powerPoint',
  archive = 'archive',
  audio = 'audio',
  video = 'video',
  image = 'image',
  other = 'others'
}

export const FileIcons = new Map<FileType, React.ReactNode>([
  [FileType.word, <i className="fa-solid fa-file-word"/>],
  [FileType.txt, <i className="fa-solid fa-file-lines"/>],
  [FileType.pdf, <i className="fa-solid fa-file-pdf"/>],
  [FileType.excel, <i className="fa-solid fa-file-excel"/>],
  [FileType.powerPoint, <i className="fa-solid fa-file-powerpoint"/>],
  [FileType.archive, <i className="fa-solid fa-file-zipper"/>],
  [FileType.audio, <i className="fa-solid fa-file-audio"/>],
  [FileType.video, <i className="fa-solid fa-file-video"/>],
  [FileType.image, <i className="fa-solid fa-file-image"/>],
  [FileType.other, <i className="fa-solid fa-file"/>],
])

interface IFileProps {
  file: File
  name?: string,
  type: FileType
}

const File: FC<IFileProps> = (props:IFileProps) => {

  const icon = FileIcons.get(props.type)
  const name = props.name || props.file.name

  return (
    <div className={classes.File}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.name}>{name}</div>
    </div>
  )
}

export default File
