import React from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';

function postItem(props) {
    return (
        <div>
            
            <li className='posts__item'>
                <Link className='posts__item__link' to={props.path}>
                    <figure className='posts__item__pic-wrap' data-category={props.label}>
                        <img
                            className='posts__item__img'
                            alt='Post'
                            src={props.src}
                        />
                    </figure>
                    <div className='posts__item__info'>
                        <h5 className='posts__item__title'>{props.title.substring(0, 250)}</h5>
                        <h5 className='posts__item__text'>{props.description.substring(0, 100)}</h5>
                        <h5 className='posts__item__text'>{props.date}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}



export default postItem

