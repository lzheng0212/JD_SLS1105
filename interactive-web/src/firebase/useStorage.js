import { useState, useEffect } from 'react'
import { projectStorage, projectFirestore, timestamp } from '../firebase/config'

const useStorage = (file, title, description, cat) => {
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name)
    const collectionRef = projectFirestore.collection('posts')

    storageRef.put(file).on('state_changed', (snap) => {
      const percentage = (snap.bytesTransferred / snap.totalBytes) * 100
      setProgress(percentage)
    }, (err) => {
      setError(err)
    }, async () => {
      const url = await storageRef.getDownloadURL()
      const createdAt = timestamp()
      const postTitle = title
      const postDesc = description
      const postCategory = cat
      collectionRef.add({ url, createdAt, postTitle, postDesc, postCategory })
      setUrl(url)
    })
  }, [file])

  return { progress, url, error }
}

export default useStorage
