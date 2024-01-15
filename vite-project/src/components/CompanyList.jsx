import { Avatar, List } from 'antd';
import { useEffect, useState } from 'react'
import { getCompany } from '../services/companyService';
import { Link } from 'react-router-dom';

// const data = [
//     {
//         title: 'Ant Design Title 1',
//     },
//     {
//         title: 'Ant Design Title 2',
//     },
//     {
//         title: 'Ant Design Title 3',
//     },
//     {
//         title: 'Ant Design Title 4',
//     },
// ];

const Company = () => {
    const [companies, setCompanies] = useState([])
    const fetchCompanies = async () => {
        const response = await getCompany()
        setCompanies(response)
    }
    useEffect(() => {
        fetchCompanies()
    }, [])

    return (
        <List
            itemLayout="horizontal"
            dataSource={companies}
            renderItem={(company, index) => (
                <Link to={`company/${company.id}`}>
                    <List.Item>
                        <List.Item.Meta
                            avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                            title={company.companyName}
                            description={company.description}
                        />
                    </List.Item>
                </Link>
            )}
        />
    )
}

export default Company