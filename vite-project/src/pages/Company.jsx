import { Descriptions } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { getCompany } from '../services/companyService';

const Company = () => {
    const id = useParams()
    const [company, setCompany] = useState([])
    const fetchCompanyById = async () => {
        const response = await getCompany(id.id)
        setCompany(response)
    }
    useEffect(() => {
        fetchCompanyById()
    }, [])
    const items = [
        {
            key: '1',
            label: 'Company',
            span: 3,
            children: company.companyName
        },
        {
            key: '2',
            label: 'Phone',
            span: 3,
            children: company.phone
        },
        {
            key: '3',
            label: 'Description',
            span: 3,
            children: company.description,
        },
        {
            key: '4',
            label: 'Detail',
            span: 3,
            children: company.detail
        },
        {
            key: '5',
            label: 'Address',
            span: 3,
            children: company.address
        },
        {
            key: '6',
            label: 'Working time',
            span: 3,
            children: company.workingTime
        },
        {
            key: '7',
            label: 'Website',
            span: 3,
            children: company.website
        },
    ];


    return <Descriptions title="User Info" bordered items={items} />;
};

export default Company;
