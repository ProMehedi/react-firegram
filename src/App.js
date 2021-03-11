import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Title from './comps/Title'
import UploadForm from './comps/UploadForm'

function App() {
  return (
    <div className='App'>
      <ToastContainer />
      <Title />
      <UploadForm />
    </div>
  )
}

export default App