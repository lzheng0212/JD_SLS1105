import useFirestore from "../hooks/useFirestore";
import PostItem from "./PostItem";
import {Space, Col, Row} from 'antd'

export default function PostCardList(props) {
    const { docs } = useFirestore("posts");

    return(
        <Row>
            {docs &&
                docs.slice(0, props.length).map((doc) => (
                <Col span={24 / props.length}>
                    <PostItem
                        src={doc.coverImage}
                        title={doc.title}
                        author={doc.author}
                        description={doc.content}
                        date={doc.createdAt}
                        label={doc.postCategory}
                        path="/specificPost"
                    />
                </Col>
                
            ))}
        </Row>
    );
}