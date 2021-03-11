import React, { useState } from 'react'
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
      setError('Please select an image file (png or jpeg')
      toast.error(error)
    }
  }

  return (
    <form>
      <input type='file' file={file} onChange={fileUploadHandler} />
      {error && <div className='error'>{error}</div>}
      {file && <div>{file.name}</div>}
    </form>
  )
}

export default UploadForm
