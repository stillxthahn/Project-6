import { useEffect, useState } from "react";
import "./Home.scss";
import { Card, List } from "antd";
import { Input, Select, Space } from "antd";
import { getCities } from "../services/cityService";
import { getTags } from "../services/tagService";
import { getCompanies } from "../services/companyService";
import Link from "antd/es/typography/Link";
const { Search } = Input;
const handleChange = (value) => {
 console.log(`Selected: ${value}`);
};
const onSearch = (value, _e, info) => console.log(info?.source, value);

const Home = () => {
 const [cities, setCities] = useState([]);
 const [tags, setTags] = useState([]);
 const [companies, setCompanies] = useState([]);
 const fetchCities = async () => {
  const response = await getCities();
  setCities(response);
 };
 const fetchTags = async () => {
  const response = await getTags();
  setTags(response);
 };
 const fetchCompanies = async () => {
  const response = await getCompanies();
  setCompanies(response);
 };
 useEffect(() => {
  fetchCities();
  fetchTags();
  fetchCompanies();
 }, []);
 var options = [];
 if (cities) {
  options = cities;
 }

 return (
  <>
   <div className="body">
    <Space
     style={{
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
     }}
    >
     {/* <Space.Compact> */}
     <Search
      className="body__search"
      placeholder="Search for jobs..."
      allowClear
      enterButton="Search"
      size="large"
      style={{
       width: "100%",
      }}
      onSearch={onSearch}
     />
     <Select
      size="large"
      defaultValue="Select"
      onChange={handleChange}
      style={{
       width: "100%",
      }}
      options={options}
     />
     {/* </Space.Compact> */}
    </Space>
    {tags && (
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
        <Card
         style={{
          textAlign: "center",
          fontWeight: 600,
          fontSize: "16px",
         }}
        >
         <Link to={`tags/${tag.id}`}></Link>
         {tag.value}
        </Card>
       </List.Item>
      )}
     />
    )}
   </div>
  </>
 );
};

export default Home;
