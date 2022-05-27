import React
  // ,{useEffect, useState}
  from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
// import axios from 'axios'
import classes from './App.module.sass'
import NewsForm from './components/NewsForm/NewsForm'
// import NewsList from './components/NewsList/NewsList'
// import {INewsList} from './types/News'
// import Navbar from './components/Navbar/Navbar'

const App: React.FC = () => {

  // const [newsList, setNewsList] = useState<INewsList>([])

  // useEffect(() => {
    // fetchNewsList()
  // }, [])

  // async function fetchNewsList() {
  //   try {
  //     const res = await axios.get<INewsList>('http://localhost:5000/api')
  //     setNewsList(res.data)
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }

  return (
    <Router>
      <div className={classes.App}>
        {/*<Navbar/>*/}
        <NewsForm/>
        {/*<NewsList newsList={newsList}/>*/}
      </div>
    </Router>
  )
}

export default App
