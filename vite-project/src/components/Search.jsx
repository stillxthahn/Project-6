import { useEffect, useState } from "react";
import { getCities } from "../services/cityService";
import { Form, Button, Input, Select } from "antd";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
 const [cities, setCities] = useState([]);
 const navigate = useNavigate();
 const fetchCities = async () => {
  const response = await getCities();
  setCities(response);
 };
 useEffect(() => {
  fetchCities();
 }, []);
 var options = [];
 if (cities) {
  options = [
   {
    value: "--All cities--",
   },
   ...cities,
  ];
 }
 const onFinish = (values) => {
  const data = {
   input: values.input,
   city: values.city === "--All cities--" ? `all` : values.city,
  };
  console.log(data);
  const path = `search${data.input && `/${data.input}`}/${data.city}`;
  navigate(path);
 };

 return (
  <Form
   style={{
    display: "flex",
    width: "100%",
   }}
   onFinish={onFinish}
   initialValues={{
    input: "",
    city: "--All cities--",
   }}
  >
   <Form.Item
    style={{
     width: "80%",
    }}
    name="input"
   >
    <Input
     size="large"
     name="description"
     style={{
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
     }}
    />
   </Form.Item>

   <Form.Item>
    <Button
     type="primary"
     size="large"
     htmlType="submit"
     style={{
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      marginRight: "20px",
     }}
    >
     Search
    </Button>
   </Form.Item>
   <Form.Item
    style={{
     width: "20%",
    }}
    name="city"
   >
    <Select size="large" placeholder="Select city" options={options}></Select>
   </Form.Item>
  </Form>
 );
};

export default Search;
