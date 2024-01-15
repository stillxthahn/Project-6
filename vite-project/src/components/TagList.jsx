import { Card, List } from 'antd';
import { useEffect, useState } from 'react'
import { getTags } from '../services/tagService';
import { Link } from 'react-router-dom';

const TagList = () => {
    const [tags, setTags] = useState([]);
    const fetchTags = async () => {
        const response = await getTags();
        setTags(response);
    };
    useEffect(() => {
        fetchTags();
    }, []);
    return (
        <List
            grid={{
                gutter: 16,
                column: 4,
            }}
            dataSource={tags}
            style={{
                marginTop: "20px",
            }}
            renderItem={(tag) => (
                <List.Item>
                    <Link to={`tags/${tag.key}`} >
                        <Card
                            style={{
                                textAlign: "center",
                                fontWeight: 600,
                                fontSize: "24px",
                                borderWidth: "2px",
                                borderColor: "lightBlue",
                            }}
                            hoverable
                        >
                            {tag.value}
                        </Card>
                    </Link>
                </List.Item>
            )}
        />
    )
}

export default TagList