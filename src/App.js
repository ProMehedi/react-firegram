import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ImageGrid from './comps/ImageGrid'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Title />
      <UploadForm />
      <ImageGrid />
    </div>
  )
}

export default App
