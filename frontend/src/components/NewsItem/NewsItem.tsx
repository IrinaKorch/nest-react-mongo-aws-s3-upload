import classes from './NewsItem.module.sass'
import React from 'react'
import {INewsItem} from '../../types/News'
import moment from 'moment'
import {v4 as uuid} from 'uuid'


interface NewsItemProps {
  newsItem: INewsItem
}

const NewsItem: React.FC<NewsItemProps> = ({newsItem}) => {
  return (
    <div className={classes.NewsItem}>
      <div className={classes.date}>{moment(newsItem.date).format('DD.MM.YYYY')}</div>
      <div className={classes.title}><h2>{newsItem.title}</h2></div>
      <div className={classes.text}><p>{newsItem.text}</p></div>
      <div className={classes.media}>
        {newsItem.media?.map(url => <img key={uuid()} src={url} alt=""/>)}
      </div>
    </div>
  );
}

export default NewsItem;
