import React, {FC, useState, MouseEvent, createRef, useRef} from 'react'
import classes from './Gallery.module.sass'
import Swipe from '../Swipe/Swipe'
import Button from '../Button/Button'
import {ButtonPurpose, ButtonView} from '../Button/ButtonTypes'
import Backdrop from '../Backdrop/Backdrop'
import {DisplayMode, IGalleryProps} from './GalleryTypes'
import {SwipeableProps} from 'react-swipeable'

const Gallery: FC<IGalleryProps> = (props: IGalleryProps) => {

  const {activeIndex, setActiveIndex, images} = props

  const [showControls, setShowControls] = useState<DisplayMode>("shown")

  const imgRef = useRef<HTMLImageElement>(null)

  if (!images || activeIndex === null) {
    return null
  }


  let isNavigationShown: boolean = false
  if (images.length > 1) {
    isNavigationShown = true
  }

  const toggleControls = () => {
    if (showControls === "shown") {
      setShowControls("hidden")
    } else {
      setShowControls("shown")
    }
  }

  const handleMouseEvent = (event: MouseEvent<HTMLDivElement | HTMLButtonElement | HTMLImageElement | Element>, handler: () => void) => {
    event.stopPropagation()
    handler()
  }

  const setNext = () => {
    if (activeIndex < images.length-1) {
      setActiveIndex(activeIndex+1)
    } else {
      setActiveIndex(0)
    }
  }

  const setPrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex- 1)
    } else {
      setActiveIndex(images.length - 1)
    }
  }

  const setNull = () => {
    setActiveIndex(null)
  }

  const swipeProps: SwipeableProps = {
    onSwipedLeft: setNext,
    onSwipedRight: setPrev,
    onSwipedUp: () => {
      if(imgRef.current) {
        imgRef.current.className = classes.onTop
      }
      setTimeout(() => setNull(), 300)
    },
    onSwipedDown: () => {
      if(imgRef.current) {
        imgRef.current.className = classes.onBottom
      }
      setTimeout(() => setNull(), 300)
    },
    onTap: toggleControls
  }

 return (
   <div className={[classes.Gallery, props.className].join(' ')}>
     <div className={classes.activeWindow}>

       <Backdrop className={classes.backdrop} onClick={(e)=> handleMouseEvent(e, setNull)}/>

       {images.map((image, index) => {
         if (index === activeIndex - 1 || (activeIndex === 0 && index === images.length-1)) {
           return (
             <img
               className={classes.onLeft}
               onClick={(e)=> handleMouseEvent(e, setNext)}
               src={images[index]}
               alt=""
             />
           )
         } else if (index === activeIndex) {
           return (
             <img
               ref={imgRef}
               onClick={(e)=> handleMouseEvent(e, setNext)}
               src={images[index]}
               alt=""
             />
           )
         } else if (index === activeIndex + 1 ||  (activeIndex === images.length-1 && index === 0)) {
           return (
             <img
               className={classes.onRight}
               onClick={(e)=> handleMouseEvent(e, setNext)}
               src={images[index]}
               alt=""
             />
           )
         }
       })}

       <Swipe className={classes.Swipe} {...swipeProps}/>
       <Button className={`${classes.back} ${classes[showControls]}`} onClick={(e)=> handleMouseEvent(e, setNull)} view={ButtonView.transparent} purpose={ButtonPurpose.back}>{`${activeIndex+1} из ${images.length}`}</Button>
       {isNavigationShown && <Button className={`${classes.prev} ${classes[showControls]}`} onClick={(e)=> handleMouseEvent(e, setPrev)} purpose={ButtonPurpose.previous} view={ButtonView.dark} round={true}/>}
       {isNavigationShown && <Button className={`${classes.next} ${classes[showControls]}`} onClick={(e)=> handleMouseEvent(e, setNext)} purpose={ButtonPurpose.next} view={ButtonView.dark} round={true}/>}

     </div>
   </div>
 )
}

export default Gallery
