import React from 'react'
import classes from './PhotoCollage.module.sass'
import {v4 as uuid} from 'uuid'

interface ILastImagesProps {
  lastImages: string[]
  handleClick: (index: number) => void
}


const LastImages = ({lastImages, handleClick}: ILastImagesProps) => {
  return (
    <div className={classes.lastImages}>
      {lastImages.map((url, index) => {
        if (index < 4) {
          return (
            <div
              onClick={() => {
                handleClick(index+1)
              }}
              key={uuid()} className={classes.imageItem}>
              <img src={url} alt=""/>
            </div>
          )
        } else {
          return null
        }
      })}
    </div>
  )
}


export default LastImages
