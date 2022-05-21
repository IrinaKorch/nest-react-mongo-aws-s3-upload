export interface INewsItem {
  id: string
  date: Date
  title?: string
  media?: Url[]
  text?: string
}

export type Url = string

export type INewsList = INewsItem[]

