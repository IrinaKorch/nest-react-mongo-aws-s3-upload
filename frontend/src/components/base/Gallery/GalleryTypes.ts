import {Dispatch, HTMLAttributes} from 'react'

export interface IGalleryProps extends HTMLAttributes<HTMLDivElement> {
  activeIndex: number | null
  setActiveIndex: Dispatch<number | null>
  images: string[] | null
}

export type DisplayMode = 'shown' | 'hidden'
