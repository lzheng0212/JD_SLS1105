import '../component/postComponents/Posts.css'
import './TimelinePage.css'

import Carousel from '../component/TimelineComponents/Carousel'
import { Content } from 'antd/lib/layout/layout'
import FooterComponent from '../component/FooterComponent'
import { Layout } from 'antd'
import NavigationBar from '../component/NavigationBar'
import React, { } from 'react'
import { format } from 'date-fns'
import {
  projectFirestore
} from '../firebase/config'

export default class TimelinePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      loaded: false,
      items: []
    }
  }

  componentDidMount () {
    // this.setState({ loading: true });

    projectFirestore.collection('timeline').orderBy('date', 'desc').onSnapshot(snapshot => {
      const item = []

      snapshot.forEach(doc =>
        item.push({
          date: format(doc.data().date.toDate(), 'yyyy-MM-dd'),
          content: doc.data().content,
          title: doc.data().title,
          id: doc.id
        })
      )

      this.setState({
        loaded: true,
        items: item
      })
    })
  }

  render () {
    console.log(this.state.items)
    return (
        <Layout>
          <NavigationBar/>
          <Content>
            {this.state.loaded && <Carousel items={this.state.items} active={0}/>}
            <FooterComponent/>
          </Content>

          {/* <FooterComponent /> */}
        </Layout>
    )
  }
}
