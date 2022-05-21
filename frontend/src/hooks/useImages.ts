import {ChangeEvent, useCallback, useState} from 'react'

export const useImages = () => {
  const [sources, setSources] = useState<string[]>([])

  const fromEvent = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    setSources([])
    const fileArray = getFileArray()
    const imageArray = fileArray.filter((file) => file.type.match(/image.+/))
    setImageSources(imageArray)


    function getFileArray() {
      const fileList: FileList | null = event.target.files
      if (fileList) {
        return Array.from(fileList)
      } else {
        return []
      }
    }


    function setImageSources(imageArray: File[]) {
      imageArray.forEach(image => {
        const reader = new FileReader()
        reader.onload = () => {
          if (reader.result && reader.readyState === 2 && typeof reader.result === 'string') {
             setSources(prevState => {
               return [...prevState, reader.result as string]
             })
          }
        }
        reader.readAsDataURL(image)
      })
    }

    }, [])

  return {sources, fromEvent}
}
