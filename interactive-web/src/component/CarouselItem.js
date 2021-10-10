import React, { useState, useEffect } from 'react';
import {CSSTransition} from "react-transition-group"
import './Carousel.css'
export default class CarouselItem extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }
    
    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                {this.props.id}
            </div>
        )
    }
}