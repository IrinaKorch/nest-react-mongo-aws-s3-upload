import {SwipeableProps, SwipeEventData, useSwipeable} from 'react-swipeable'
import React, {FC, HTMLAttributes} from 'react'
import {ConfigurationOptions} from 'react-swipeable/src/types'

export type SwipeHandler = (swipeEventData: SwipeEventData) => void

interface ISwipeProps extends SwipeableProps, HTMLAttributes<HTMLDivElement> {
  // onSwiped?: SwipeHandler,       // After any swipe   (SwipeEventData) => void
  // onSwipedLeft?: SwipeHandler,   // After LEFT swipe  (SwipeEventData) => void
  // onSwipedRight?: SwipeHandler,  // After RIGHT swipe (SwipeEventData) => void
  // onSwipedUp?: SwipeHandler,     // After UP swipe    (SwipeEventData) => void
  // onSwipedDown?: SwipeHandler,   // After DOWN swipe  (SwipeEventData) => void
  // onSwipeStart?: SwipeHandler,   // Start of swipe    (SwipeEventData) => void *see details*
  // onSwiping?: SwipeHandler,      // During swiping    (SwipeEventData) => void
  // onTap?: TapCallback,          // After a tap       ({ event }) => void
  // //
  // // // Pass through callbacks, event provided: ({ event }) => void
  // onTouchStartOrOnMouseDown?: TapCallback, // Called for `touchstart` and `mousedown`
  // onTouchEndOrOnMouseUp?: TapCallback,     // Called for `touchend` and `mouseup`
  // config?: ConfigurationOptions
}

const Swipe: FC<ISwipeProps> = (props: ISwipeProps) => {

  const swipeDefaultConfig: ConfigurationOptions = {
    delta: 10,                            // min distance(px) before a swipe starts. *See Notes*
    preventScrollOnSwipe: true,           // prevents scroll during swipe (*See Details*)
    trackTouch: true,                      // track touch input
    trackMouse: false,                     // track mouse input
    rotationAngle: 0,                      // set a rotation angle
    swipeDuration: Infinity,               // allowable duration of a swipe (ms). *See Notes*
    touchEventOptions: { passive: true },  // options for touch listeners (*See Details*)
  }

  const swipeHandlers = useSwipeable({
    onSwiped: props.onSwiped,
    onTap: props.onTap,
    onSwipedLeft: props.onSwipedLeft,
    onSwipedRight: props.onSwipedRight,
    onSwipedUp: props.onSwipedUp,
    onSwipedDown: props.onSwipedDown,
    onSwipeStart: props.onSwipeStart,
    onSwiping: props.onSwiping,
    onTouchEndOrOnMouseUp: props.onTouchEndOrOnMouseUp,
    onTouchStartOrOnMouseDown: props.onTouchStartOrOnMouseDown,
    ...swipeDefaultConfig,
    ...props
  })
  return (
    <div {...swipeHandlers} {...props}/>
  )

}

export default Swipe
