import React, { useState } from 'react'
import ProgressBar from './ProgressBar'
import { toast } from 'react-toastify'

const UploadForm = () => {
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null)

  const types = ['image/png', 'image/jpeg']

  const fileUploadHandler = (e) => {
    let selectedFile = e.target.files[0]

    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile)
      setError(null)
    } else {
      setFile(null)
      setError('Please select an image file (png or jpeg)')
      toast.error('Please select an image file (png or jpeg)')
    }
  }

  return (
    <form>
      <label htmlFor='file'>
        <input
          type='file'
          file={file}
          id='file'
          name='file'
          onChange={fileUploadHandler}
        />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile} />}
      </div>
    </form>
  )
}

export default UploadForm
