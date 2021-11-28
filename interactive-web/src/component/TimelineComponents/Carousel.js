/* eslint-disable react/prop-types */
import React from 'react'
import { CSSTransitionGroup } from 'react-transition-group'
import './Carousel.css'
import CarouselItem from './CarouselItem'

export default class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: this.props.items,
      active: this.props.active,
      direction: ''
    }
    this.rightClick = this.moveRight.bind(this)
    this.leftClick = this.moveLeft.bind(this)
  }

  generateItems () {
    const items = []
    let level
    console.log(this.state.active)
    for (let i = this.state.active - 2; i < this.state.active + 3; i++) {
      let index = i
      if (i < 0) {
        index = this.state.items.length + i
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length
      }
      level = this.state.active - i
      console.log(this.state.items[index].date)
      items.push(<CarouselItem key={index} id={this.state.items[index].date} level={level} />)
    }
    return items
  }

  moveLeft () {
    let newActive = this.state.active
    newActive--
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: 'left'
    })
  }

  moveRight () {
    const newActive = this.state.active
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: 'right'
    })
  }

  render () {
    return (
            <div className="timeline">
                <div className="carousel-container">
                    <div id="carousel" className="noselect">
                        <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                        <CSSTransitionGroup
                            transitionName={this.state.direction}>
                            {this.generateItems()}
                        </CSSTransitionGroup>
                        <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
                    </div>
                </div>
                <div className="detail-container">
                    <div className="title">
                    {this.state.items[this.state.active].title}
                    </div>
                    <div className="date" style={{ alignSelf: 'flex-start' }}>
                    {this.state.items[this.state.active].date.toString()}
                    </div>
                    <div className="content" >
                    {this.state.items[this.state.active].content}
                    </div>
                </div>

            </div>

    )
  }
}
