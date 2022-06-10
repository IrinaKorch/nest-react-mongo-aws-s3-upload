import {FC, useState} from 'react'
import {IPhotoCollageProps} from './PhotoCollageTypes'
import classes from './PhotoCollage.module.sass'
import {v4 as uuid} from 'uuid'
import LastImages from './LastImages'
import Gallery from '../Gallery/Gallery'

const PhotoCollage: FC<IPhotoCollageProps> = (props: IPhotoCollageProps) => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const {images} = props


  let oneImage: string | null = null
  let twoImages: string[] | null = null
  let lastImages: string[] | null = null
  let extraImages: number | null = null

  if (images) {
    if (images.length === 1) {
      oneImage = images[0]
    }
    if (images.length === 2) {
      twoImages = [images[0], images[1]]
    }
    if (images.length > 2) {
      oneImage = images[0]
      lastImages = images.filter((img, idx) => idx > 0)
    }
    if (images.length>5) {
      extraImages = images.length - 4
    }
  }

  const handleClick = (index: number | null) => {
    setActiveIndex(index)
  }

  if (images && images.length>0) {
    return (
      <div className={classes.PhotoCollage}>
        {
          oneImage &&
          <div className={classes.oneImage} >
            <img onClick={()=> handleClick(0)} key={uuid()} src={oneImage} alt=''/>
          </div>
        }
        {
          twoImages &&
          <div className={classes.twoImages}>
            {
              twoImages.map((image, index) => {
                return <img onClick={() => handleClick(index)} key={uuid()} src={image} alt=''/>
              })
            }
          </div>
        }

        {lastImages && <LastImages handleClick={handleClick} lastImages={lastImages}/>}
        {extraImages && <div onClick={() => handleClick(4)} className={classes.extraImages}>{'+ ' + extraImages}</div>}
        <Gallery activeIndex={activeIndex} setActiveIndex={setActiveIndex} images={images}/>
      </div>
    )
  } else {
    return null
  }
}

export default PhotoCollage
