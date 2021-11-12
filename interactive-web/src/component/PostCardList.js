import useFirestore from "../hooks/useFirestore";
import PostItem from "./PostItem";
import {Space, Col, Row} from 'antd'

export default function PostCardList(props) {
    const { docs } = useFirestore("posts");
    return(
        <Row gutter={[16, 24]} justify='center'>
            {docs &&
                docs.slice(0, props.length).map((doc) => (
                <Col id='col' xs={48 / props.length} sm={48 / props.length} md={48 / props.length} lg={48 / props.length} xl={24 / props.length} xxl={24 / props.length}>
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