import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Avatar } from 'antd';
import "./PostItem.css";

function PostItem(props) {
  const { Meta } = Card;
  return (
    // <li className="posts__item">
      <Link
        className="posts__item__link"
        to={{ pathname: "/specificPost", state: { props } }}
      >
        <Card
          style={{ width: 240 }}
          cover={
            <figure className="posts__item__pic-wrap" data-category={props.label}>
              <img className="posts__item__img" alt="Post" src={props.src} />
            </figure>
          }
          hoverable
        >

          <Meta
            title={props.title}
            description={props.author}
          />

          <div>
            <br />
            <span>2021-01-01</span>
          </div>
        </Card>
      </Link>
    // </li>


  );
}

export default PostItem;
