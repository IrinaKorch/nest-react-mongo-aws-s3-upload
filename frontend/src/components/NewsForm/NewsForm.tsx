import {FC} from 'react'
import {SubmitHandler, useForm} from 'react-hook-form'
import moment from 'moment'
import classes from './NewsForm.module.sass'
import Form from '../base/formControls/Form/Form'
import DateInput from '../base/formControls/DateInput/DateInput'
import TextInput from '../base/formControls/TextInput/TextInput'
import Textarea from '../base/formControls/Textarea/Textarea'
import FileInput from '../base/formControls/FileInput/FileInput'
import FilePreview from '../base/FilePrewiew/FilePreview'
import ImageInput from '../base/formControls/ImageInput/ImageInput'
import PhotoCollage from '../base/PhotoCollage/PhotoCollage'
import Button from '../base/Button/Button'
import {useFiles} from '../../hooks/useFiles/useFiles'
import InputGroup from '../base/formControls/InputGroup/InputGroup'

type NewsFormValues = {
  date: string
  title: string
  text: string
  images: File[] | FileList
  files: File[] | FileList
}

const NewsForm: FC = () => {

  const { register, watch, handleSubmit } = useForm<NewsFormValues>({
    defaultValues: {
      date: moment(new Date()).format('YYYY-MM-DD'),
      title: '',
      text: '',
    }
  })
  const files = watch('files')
  const imageFiles = watch('images')
  const sortedFiles = useFiles(files)
  const { images } = useFiles(imageFiles)
  const submitHandler: SubmitHandler<NewsFormValues> = (data) => {
    console.log(data)
  }

  return (
    <div className={classes.NewsFormContainer}>
      <Form onSubmit={handleSubmit(submitHandler)} className={classes.NewsForm}>
        <DateInput
          register={register('date', {valueAsDate: true})}
          className={classes.dateInput}
        />
        <TextInput
          register={register('title')}
          className={classes.titleInput}
          placeholder={'Заголовок'}
        />
        <Textarea register={register('text')}/>
        <InputGroup>
          <FileInput register={register('files')} multiple={true}/>
          <ImageInput register={register('images')} multiple={true}/>
        </InputGroup>
        <FilePreview {...sortedFiles} {...sortedFiles.docs}/>
        <PhotoCollage images={images.map(image => image.src)}/>
        <Button type='submit'>Опубликовать</Button>
      </Form>
    </div>
  )
}

export default NewsForm
