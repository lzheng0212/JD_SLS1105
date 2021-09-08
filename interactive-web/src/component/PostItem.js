import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PostItem.css';
import ReactHtmlParser from 'react-html-parser';

function PostItem(props) {

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
                        <h5 id="postContent" className='posts__item__title'>{props.title}</h5>
                        <h5 className='posts__item__text'>{ReactHtmlParser(props.description)}</h5>
                        <h5 className='posts__item__text'>{props.date}</h5>
                    </div>
                </Link>
            </li>
        </div>
    )
}



export default PostItem

