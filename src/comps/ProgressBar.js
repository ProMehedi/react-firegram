import { motion } from 'framer-motion'
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

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar
