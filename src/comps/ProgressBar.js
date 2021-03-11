import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import useStorage from '../hooks/useStorage'

const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file)

  useEffect(() => {
    if (url) {
      setFile(null)
      toast.success('File Successfuly Uploaded!')
    }
  }, [url, setFile])

  return <div className='progress-bar' style={{ width: progress + '%' }}></div>
}

export default ProgressBar
