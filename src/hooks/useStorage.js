import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import {
  projectFilesStorage,
  projectStorage,
  timestamp,
} from '../config/firebase'

const useStorage = (file) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    // References
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFilesStorage.collection('images')

    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
        setProgress(percentage)
      },
      (err) => {
        setError(err)
        toast.error('Opp!! Faild to upload!')
      },
      async () => {
        const url = await storageRef.getDownloadURL()
        collectionRef.add({ url, createdAt: timestamp() })
        setUrl(url)
      }
    )
  }, [file])

  return { progress, url, error }
}

export default useStorage
