import classes from './NewsForm.module.sass'
import React from 'react'
import TextInput from '../base/TextInput/TextInput'
import Form from '../base/Form/Form'
import Textarea from '../base/Textarea/Textarea'
import DateInput from '../base/DateInput/DateInput'
import FileInput from '../base/FileInput/FileInput'
import { v4 as uuid } from 'uuid'
import Button from '../base/Button/Button'
import {ButtonPurpose} from '../base/Button/ButtonTypes'
import NewsList from '../NewsList/NewsList'
import PhotoCollage from '../base/PhotoCollage/PhotoCollage'


const NewsForm: React.FC = () => {
  return (
    <div className={classes.NewsForm}>
      <Form onSubmit={(e) => {
        e.preventDefault()
        console.log("click!")
      }}>
        <DateInput/>
        <TextInput label={'Заголовок'}/>
        <Textarea/>
        <FileInput accept={'image/*'} multiple={true} name='newsImageInput' id={uuid()}/>
        <PhotoCollage
          images={[
            'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
            'https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg',
            'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
            'https://st.depositphotos.com/2547675/3009/i/450/depositphotos_30094505-stock-photo-time-clock.jpg',
            'https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg',
            'https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg',
            'https://mirpozitiva.ru/wp-content/uploads/2019/11/1472042660_10.jpg',
            'https://img1.akspic.ru/previews/6/3/3/7/6/167336/167336-oblako-burya-rastenie-atmosfera-prirodnyj_landshaft-500x.jpg',
          ]}
        />
        <Button type={'submit'}>Опубликовать</Button>
      </Form>
    </div>
  );
}

export default NewsForm;
