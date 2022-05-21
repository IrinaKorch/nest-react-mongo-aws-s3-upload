import classes from './NewsList.module.sass'
import React from 'react'
import NewsItem from '../NewsItem/NewsItem'
import {INewsList} from '../../types/News'


interface NewsListProps {
  newsList: INewsList
}



const NewsList: React.FC<NewsListProps> = ({newsList}) => {
  return (
    <div className={classes.NewsList}>
      {newsList.map(newsItem =>
        <NewsItem
          key={newsItem.id}
          newsItem={newsItem}
        />
      )}
    </div>
  );
}

export default NewsList;
