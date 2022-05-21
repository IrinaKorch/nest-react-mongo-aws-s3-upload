import {FC, MouseEventHandler, useState} from 'react'
import {IPhotoCollageProps} from './PhotoCollageTypes'
import classes from './PhotoCollage.module.sass'
import {v4 as uuid} from 'uuid'
import LastImages from './LastImages'

const PhotoCollage: FC<IPhotoCollageProps> = (props: IPhotoCollageProps) => {

  const [active, setActive] = useState<number | null>(null)

  const {images} = props
  let firstImage: string | null = null
  let lastImages: string[] | null = null
  let extraImages: number | null = null

  if (images) {
    if (images.length>0) {
      firstImage = images[0]
    }
    if (images.length>1) {
      lastImages = images.filter((img, idx) => idx !== 0)
    }
    if (images.length>5) {
      extraImages = images.length - 5
    }
  }
  const handleClick = (index: number | null) => {
    setActive(index)
  }
  const handleNext: MouseEventHandler<HTMLButtonElement | HTMLImageElement> = (event) => {
    event.stopPropagation()
    if (images) {
      setActive(prevState => {
        if (prevState !== null && prevState < images.length-1) {
          return (prevState + 1)
        }
        return 0
      })
    }

  }

  const handlePrev: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    if (images) {
      setActive(prevState => {
        if (prevState !== null && prevState > 0) {
          return (prevState - 1)
        }
        return (images.length - 1)
      })
    }
  }





  if (images && images.length>0) {
    return (

      <div className={classes.PhotoCollage}>
        {firstImage && <div onClick={()=> handleClick(0)} key={uuid()} className={classes.firstImage}><img src={images[0]} alt=""/></div>}
        {lastImages && <LastImages handleClick={handleClick} lastImages={lastImages}/>}
        {extraImages && <div onClick={() => handleClick(4)} className={classes.extraImages}>{'+ ' + extraImages}</div>}
        {active !== null && (
          <div
            className={classes.activeImage}
            onClick={() => handleClick(null)}
          >
            <button onClick={handlePrev} className={classes.prev}><i className="fa-solid fa-chevron-left"/></button>
            <img onClick={handleNext} src={images[active]} alt=""/>
            <button onClick={handleNext} className={classes.next}><i className="fa-solid fa-chevron-right"/></button>
          </div>
        )
        }
      </div>
    )
  } else {
    return null
  }
}

export default PhotoCollage
