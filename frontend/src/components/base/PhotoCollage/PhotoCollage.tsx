import {FC, MouseEventHandler, useState} from 'react'
import {IPhotoCollageProps} from './PhotoCollageTypes'
import classes from './PhotoCollage.module.sass'
import {v4 as uuid} from 'uuid'
import LastImages from './LastImages'
import Gallery from './Gallery'

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

  if (images && images.length>0) {
    return (

      <div className={classes.PhotoCollage}>
        {firstImage && <div onClick={()=> handleClick(0)} key={uuid()} className={classes.firstImage}><img src={images[0]} alt=""/></div>}
        {lastImages && <LastImages handleClick={handleClick} lastImages={lastImages}/>}
        {extraImages && <div onClick={() => handleClick(4)} className={classes.extraImages}>{'+ ' + extraImages}</div>}
        <Gallery image={active} setImage={setActive} images={images}/>
      </div>
    )
  } else {
    return null
  }
}

export default PhotoCollage
