import { useEffect, useState } from 'react'

import { projectFirestore } from './config'

const useFirestore = (collection, filterValue = 0, keyword = '') => {
  console.log('parameter', filterValue, keyword)
  const [docs, setDocs] = useState([])
  useEffect(() => {
    if (filterValue === 1 && keyword.length !== 0) {
      const unsub1 = projectFirestore
        .collection(collection)
        .where('titleToUpper', 'array-contains', keyword.toUpperCase())
        .orderBy('titleToUpper', 'desc')
        .limit(6)
        .onSnapshot((snap) => {
          const documents = []
          snap.forEach((doc) => {
            documents.push({
              ...doc.data(),
              postTitle: doc.title,
              desc: doc.postDesc,
              cat: doc.postCategory,
              createdAt: doc.createdAt,
              PostId: doc.id
            })
          })
          setDocs(documents)
        })
      return () => unsub1()
    } else if (filterValue === 2 && keyword.length !== 0) {
      const unsub2 = projectFirestore
        .collection(collection)
        .where('authorToUpper', 'array-contains', keyword.toUpperCase())
        .orderBy('authorToUpper', 'desc')
        .limit(6)
        .onSnapshot((snap) => {
          const documents = []
          snap.forEach((doc) => {
            documents.push({
              ...doc.data(),
              postTitle: doc.title,
              desc: doc.postDesc,
              cat: doc.postCategory,
              createdAt: doc.createdAt,
              PostId: doc.id
            })
          })
          setDocs(documents)
        })
      return () => unsub2()
    } else {
      const unsub3 = projectFirestore
        .collection(collection)
        .orderBy('createdAt', 'desc')
        .onSnapshot((snap) => {
          const documents = []
          snap.forEach((doc) => {
            documents.push({
              ...doc.data(),
              postTitle: doc.title,
              desc: doc.postDesc,
              cat: doc.postCategory,
              createdAt: doc.createdAt,
              PostId: doc.id
            })
          })
          setDocs(documents)
        })
      return () => unsub3()
    }
  }, [collection, keyword])
  return { docs }
}
export default useFirestore
