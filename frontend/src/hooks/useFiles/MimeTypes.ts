type MimeTypes = {
  [key: string]: RegExp
}

export const MimeTypes: MimeTypes = {
  image: /image.+/,
  video: /video.+/,
  audio: /audio.+/,
  txt: /text\/plain/,
  word: /application\/vnd\.openxmlformats-officedocument\.wordprocessingml\.document|application\/msword/,
  excel: /application\/vnd.ms-excel|application\/vnd\.openxmlformats-officedocument\.spreadsheetml\.sheet/,
  pdf: /application\/pdf/,
  powerPoint: /application\/vnd\.ms-powerpoint|application\/vnd\.openxmlformats-officedocument\.presentationml\.presentation/,
  archive: 	/application\/x-zip-compressed|application\/x-7z-compressed|application\/vnd\.rar|application\/zip|application\/x-tar|application\/x-freearc|application\/x-bzip.+|application\/gzip/,
}

type InputTypes = {
  [key: string]: string
}

export const InputTypes: InputTypes = {
  docs: `application/vnd.openxmlformats-officedocument.wordprocessingml.document,
        application/msword,
        application/vnd.ms-excel,
        application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,
        application/pdf,
        text/plain`,
  powerPoint: `application/vnd.ms-powerpoint,
                application/vnd.openxmlformats-officedocument.presentationml.presentation`,
  images: `image/*`,
  videos: `video/*`,
  audios: `audio/*`,
  archives: `application/x-7z-compressed,
              application/zip,
              application/vnd.rar,
              application/x-tar,
              application/x-freearc,
              application/x-bzip,
              application/x-bzip2,
              application/gzip`
}
