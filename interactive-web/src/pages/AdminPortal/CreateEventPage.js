import React, { useState, useEffect } from 'react'
import './CreateEventPage.css'
import { Quill } from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { Button } from '../../component/Button'
import { reactQuillToolbarModules as toolbarModules } from '../../component/ReactQuillModules'
import { useLocation } from 'react-router'
import DatePicker from 'react-datepicker'
import { projectFirestore } from '../../firebase/config'
import CategoryContainer from '../../component/postComponents/CategoryContainer'
import { message } from 'antd'
import 'react-datepicker/dist/react-datepicker.css'

// Resources: https://github.com/zenoamaro/react-quill
// License is also in the link above for react-quill

function CreateEventPage () {
  const updateData = useLocation().state
  const update = updateData.update
  // eslint-disable-next-line no-unused-vars
  const [quill, setQuill] = useState(null)
  const [selectedCategories, setCategory] = useState([])
  const [availableCategories, setAvailableCategories] = useState([])
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const successEvent = () => {
    message.success('Create Successfully!')
  }

  const successUpdate = () => {
    message.success('Update Successfully!')
  }

  const addToCategoryList = (categoryName) => {
    if (!selectedCategories.includes(categoryName)) {
      setCategory([...selectedCategories, categoryName])
    }
  }

  const removeFromCategoryList = (categoryName) => {
    if (selectedCategories.includes(categoryName)) {
      const index = selectedCategories.indexOf(categoryName)
      selectedCategories.splice(index, 1)
      setCategory([...selectedCategories])
    }
  }

  const sendEvent = async (e) => {
    const eventTitle = document.getElementById('eventTitle').value
    const location = document.getElementById('eventLocation').value
    const description = document.getElementById('eventDescription').value
    const month = String(startDate.getUTCMonth() + 1)
    const year = String(startDate.getUTCFullYear())

    const data = {
      location: location,
      title: eventTitle,
      /* content: JSON.stringify(quill.getContents()), */
      content: description,
      categories: selectedCategories,
      startTime: Date.parse(startDate),
      endTime: Date.parse(endDate)
    }

    console.log(data)
    document.getElementById('eventLocation').value = ''
    document.getElementById('eventTitle').value = ''
    document.getElementById('eventDescription').value = ''
    setStartDate(new Date())
    setEndDate(new Date())
    setFile(null)
    if (!update) {
      const docRef = projectFirestore.collection('Events').doc(year)
      const doc = await docRef.get()
      const docData = doc.data()
      if (doc.get(month) === undefined) {
        const events = { events: [data] }
        await docRef.update({
          [month]: events
        })
      } else {
        const events = docData[month].events
        const updatedEvents = { events: [...events, data] }
        await docRef.update({
          [month]: updatedEvents
        })
      }
      successEvent()
    } else {
      const docRef = projectFirestore.collection('Events').doc(year)
      const doc = await docRef.get()
      const docData = doc.data()
      const events = docData[month].events
      const updatedEvents = events.map(event => {
        if (event.title !== eventTitle) {
          return event
        } else {
          return data
        }
      })
      await docRef.update({
        [month]: { events: updatedEvents }
      })
      successUpdate()
    }
  }

  const [file, setFile] = useState(null)

  useEffect(() => {
    projectFirestore
      .collection('categories')
      .get()
      .then((snapshot) => {
        snapshot.docs.forEach(doc => {
          setAvailableCategories([...doc.data().CategoryList])
        })
      })
    const quill = new Quill('.ql-editor', {
      modules: {
        toolbar: toolbarModules.toolbar
      },
      placeholder: 'Event Desrcription!',
      theme: 'snow'
    })

    setQuill(quill)
    if (update) {
      const data = updateData.content
      document.getElementById('eventDescription').value = data
      setCategory([...updateData.categories])
      setStartDate(new Date(updateData.startTime))
      setEndDate(new Date(updateData.endTime))
    }
  }, [])

  return (
    <div>
    <post-form>
      <div className = "title-event">
      <input
        placeholder="Event Title"
        type="text"
        id="eventTitle"
        name="eventTitle"
        style={{ width: '100%' }}
        defaultValue={update ? updateData.title : ''}
      />
       <br></br>
      <input
        placeholder="Location"
        type="text"
        id="eventLocation"
        name="eventLocation"
        style={{ width: '100%' }}
        defaultValue={update ? updateData.location : ''}
      />
      </div>
      <div className="time-event">
        <div className="start-date">
          <h3>Start Date</h3>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="end-date">
          <h3>End Date</h3>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
      </div>
      <h3>Available Categories</h3>
      <CategoryContainer id="availableCategories"icon="+" categoryList={availableCategories} callBackFunc={addToCategoryList} background = {true}/>
      {selectedCategories.length !== 0 && (<><h3>Selected Categories</h3>
        <CategoryContainer icon="x" categoryList={selectedCategories} callBackFunc={removeFromCategoryList} /></>)}
      <div className="output">
        {file && <div> {file.name} </div>}
      </div>

      <div className = "title-event">
        <input
          placeholder="Event description"
          type="text"
          id="eventDescription"
          name="eventDescription"
          style={{ width: '100%' }}
          defaultValue={update ? updateData.location : ''}
        />
      </div>
      <div >
        <div style={{ marginTop: '30px', paddingLeft: '850px' }}>
          {update && (
            <Button
              style={{ paddingLeft: '300px' }}
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={sendEvent}
            >
              Update
            </Button>
          )}
          {!update && (
            <Button
              style={{ paddingLeft: '300px' }}
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={sendEvent}
            >
              Create
            </Button>
          )}
        </div>
      </div>
    </post-form>
    </div>
  )
}

export default CreateEventPage
