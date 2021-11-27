import React from 'react'
import US from '@svg-maps/usa'
import { SVGMap } from 'react-svg-map'
import 'react-svg-map/lib/index.css'

export default function InteractiveMap () {
  return (
        <>
            <SVGMap map={US} />
        </>
  )
}
