export interface IDocs {
  all: File[]
  word: File[]
  excel: File[]
  pdf: File[]
  txt: File[]
  powerPoint: File[]
}

export interface IFiles {
  images: HTMLImageElement[]
  imageFiles: File[]
  docs: IDocs
  videos: File[]
  audios: File[]
  archives: File[]
  others: File[]
}
