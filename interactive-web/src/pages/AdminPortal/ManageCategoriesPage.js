import React, { useState, useEffect } from 'react'
import { projectFirestore } from '../../firebase/config'
import CategoryContainer from '../../component/postComponents/CategoryContainer'
import { Row, Col, message } from 'antd'
import './ManageCategoriesPage.css'

function ManageCategoriesPage () {
  const [availableCategories, setCategory] = useState([])
  const [docID, setDocId] = useState()

  const addToCategoryList = (categoryName) => {
    if (!availableCategories.includes(categoryName)) {
      setCategory([...availableCategories, categoryName])
      message.success('Category created!')
    } else {
      message.error('Category already exists!')
    }
  }

  const removeFromCategoryList = (categoryName) => {
    if (availableCategories.includes(categoryName)) {
      const index = availableCategories.indexOf(categoryName)
      availableCategories.splice(index, 1)
      setCategory([...availableCategories])
      message.warn('Category removed!')
    }
  }

  const updateDataBaseCategoryList = () => {
    projectFirestore.collection('categories').doc(docID).set({ CategoryList: availableCategories })
  }

  useEffect(() => {
    if (docID) {
      updateDataBaseCategoryList()
    }
  }, [availableCategories])

  useEffect(() => {
    projectFirestore
      .collection('categories')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          setCategory([...doc.data().CategoryList])
          setDocId(doc.id)
        })
      })
  }, [])

  return (
       <Row style={{ minHeight: '100%' }} justify="space-around" align="middle">
            <Col span={24} align='middle'>
                <Row justify="center">
                    <h1>Category List</h1>
                </Row>
                <Row justify="center" style={{ marginTop: '24px' }}>
                    <form id="add-category-form">
                        <input type="text" name="name" placeholder="Category name" />
                        <button type="button" onClick={() => {
                          const form = document.querySelector('#add-category-form')
                          addToCategoryList(form.name.value)
                          form.name.value = ''
                        }}>Add Category</button>
                    </form>
                </Row>
                <Row justify="center" style={{ marginTop: '24px' }}>
                    <Col>
                        <CategoryContainer icon="x" categoryList={availableCategories} callBackFunc={removeFromCategoryList} tagStyle={{ minHeight: '36px', minWidth: '64px', textAlign: 'center' }}/>
                    </Col>
                </Row>
            </Col>
        </Row>
  )
}

export default ManageCategoriesPage
