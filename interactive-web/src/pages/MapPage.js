/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import { feature, mesh } from 'topojson-client'

import NavigationBar from '../component/NavigationBar'
import FooterComponent from '../component/FooterComponent'
import { projectFirestore } from '../firebase/config'
import { Layout } from 'antd'
import MapList from '../component/ListViews/MapList'
import { Content } from 'antd/lib/layout/layout'

function MapPage () {
  return (
    <Layout>
        <NavigationBar/>
        <Content>
            <div id="mapHeader">
              <h1>Map Of Our Involvements</h1>
            </div>
            <MapList/>
        </Content>
        <FooterComponent/>
    </Layout>

  )
}

export default MapPage
