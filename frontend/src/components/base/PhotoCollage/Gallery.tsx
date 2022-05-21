import React, {Dispatch, MouseEventHandler} from 'react'
import classes from './PhotoCollage.module.sass'

interface IGalleryProps {
  image: number | null
  images: string[] | null
  setImage: Dispatch<number | null>
}



const Gallery = (props: IGalleryProps) => {

  const {image, images, setImage} = props

  const handleNext: MouseEventHandler<HTMLButtonElement | HTMLImageElement> = (event) => {
    event.stopPropagation()
    if (images && image !== null && image < images.length-1) {
      setImage(image+1)
    } else {
      setImage(0)
    }
  }

  const handlePrev: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation()
    if (images) {
      if (image !==null && image > 0) {
        setImage(image- 1)
      } else {
        setImage(images.length - 1)
      }
    }

  }

 if (images !== null && image !== null) {
   return (
     <div
       className={classes.activeImage}
       onClick={() => setImage(null)}
     >
       <button onClick={handlePrev} className={classes.prev}><i className="fa-solid fa-chevron-left"/></button>
       <img onClick={handleNext} src={images[image]} alt=""/>
       <button onClick={handleNext} className={classes.next}><i className="fa-solid fa-chevron-right"/></button>
     </div>
   )
 } else {
   return null
 }

}

export default Gallery
