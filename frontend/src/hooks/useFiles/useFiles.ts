import {MimeTypes} from './MimeTypes'
import {useEffect, useState} from 'react'
import {IDocs, IFiles} from './interfaces'

const defaultDocs: IDocs = {
  all: [], excel: [], pdf: [], powerPoint: [], word: [], txt: []
}

const initialState: IFiles = {
  images: [],
  imageFiles: [],
  docs: defaultDocs,
  videos: [],
  audios: [],
  archives: [],
  others: [],
}


export const useFiles = (fileList: FileList|File[]|undefined) => {
  const [files, setFiles] = useState<IFiles>(initialState)
  useEffect(() => {
    const fileArray = getFileArray(fileList ?? [])
    setImages(fileArray)
    setImageFiles(fileArray)
    setDocs(fileArray)
    setAudios(fileArray)
    setVideos(fileArray)
    setArchives(fileArray)
    setOthers(fileArray)
  }, [fileList])

  const setImages = (fileArray: File[]) => {
    setFiles(prevState => {
      return { ...prevState, images: []}
    })
    const imageFiles = filterFiles(fileArray, MimeTypes.image)
    imageFiles.forEach(image => {
      const reader = new FileReader()
      reader.onload = () => {
        if (reader.result && reader.readyState === 2 && typeof reader.result === 'string') {
          const newImage = new Image()
          newImage.src = reader.result
          setFiles(prevState => {
            return {...prevState, images: [...prevState.images, newImage]}
          })
        }
      }
      reader.readAsDataURL(image)
    })
  }

  function setImageFiles(fileArray: File[]) {
    const imageFiles = filterFiles(fileArray, MimeTypes.image)
    setFiles(prevState => {
      return { ...prevState, imageFiles}
    })
  }

  function setDocs(fileArray: File[]) {
    let docs:IDocs = files.docs
    docs.txt = filterFiles(fileArray, MimeTypes.txt)
    docs.word = filterFiles(fileArray, MimeTypes.word)
    docs.excel = filterFiles(fileArray, MimeTypes.excel)
    docs.pdf = filterFiles(fileArray, MimeTypes.pdf)
    docs.powerPoint = filterFiles(fileArray, MimeTypes.powerPoint)
    docs.all = [...docs.txt, ...docs.word, ...docs.excel, ...docs.pdf, ...docs.powerPoint]
    setFiles(prevState => {
      return { ...prevState, docs: {...docs}}
    })
  }

  function setVideos(fileArray: File[]) {
    const videos = filterFiles(fileArray, MimeTypes.video)
    setFiles(prevState => {
      return { ...prevState, videos}
    })
  }

  function setAudios(fileArray: File[]) {
    const audios = filterFiles(fileArray, MimeTypes.audio)
    setFiles(prevState => {
      return { ...prevState, audios}
    })
  }

  function setArchives(fileArray: File[]) {
    const archives = filterFiles(fileArray, MimeTypes.archive)
    setFiles(prevState => {
      return { ...prevState, archives}
    })
  }

  function setOthers(fileArray: File[]) {
    const regexps: RegExp[] = []
    for(const type in MimeTypes) {
      regexps.push(MimeTypes[type])
    }
    const others = fileArray.filter((file) => notMatchEvery(file.type, regexps))
    setFiles(prevState => {
      return {...prevState, others}
    })
  }

  function notMatchEvery(str: String, arr: RegExp[]) {
    const matches: boolean[] = []
    arr.forEach(regexp => {
      matches.push(
        !str.match(regexp)
      )
    })
    return matches.every((match) => match)
  }

  function filterFiles(files: File[], regular: RegExp) {
    return files.filter((file) => file.type.match(regular))
  }

  function getFileArray(files: FileList | File[] | null) {
    if (files) {
      return Array.from(files)
    } else {
      return []
    }
  }
  return files
}
