import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Avatar } from 'antd';
import "./PostItem.css";

function PostItem(props) {
  const { Meta } = Card;
  return (
    <li className="posts__item">
       <Link
          className="posts__item__link"
          to={{ pathname: "/specificPost", state: { props } }}
        >
          <Card
            style={{ width: 240}}
            cover={
              <figure className="posts__item__pic-wrap" data-category={props.label}>
                <img className="posts__item__img" alt="Post" src={props.src} />
              </figure>
            }
            hoverable
          >

            <Meta
              title= {props.title}
              description= {props.author}
            />

            <div>
              <br/>
              <span>2021-01-01</span>
            </div>
          </Card>
      </Link>
    </li>
   
    
  );
}

export default PostItem;

{/* <div>
      <li className="posts__item">
        <Link
          className="posts__item__link"
          to={{ pathname: "/specificPost", state: { props } }}
        >
          <figure className="posts__item__pic-wrap" data-category={props.label}>
            <img className="posts__item__img" alt="Post" src={props.src} />
          </figure>
          <div className="posts__item__info">
            <h5 id="postContent" className="posts__item__title">
              {props.title}
            </h5> */}
            {/* commenting out the line below because we dont have a dedicated description for post yet
            currently it is taking the content of the post as the description which is wrong so im commenting it out */}
            {/* <h5 className="posts__item__text">
              {ReactHtmlParser(props.description)}
            </h5> */}
            {/* <h5 className="posts__item__text">{props.author}</h5>
          </div>
        </Link>
      </li>
    </div> */}
