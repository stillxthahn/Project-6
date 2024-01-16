import { useEffect, useState } from "react";
import { getJob, getJobByCompany } from "../../services/jobService";
import { getCvByCompany } from "../../services/cvService";
import { getCookie } from "../../helpers/cookie";
import { Divider, Table } from "antd";
import ColumnGroup from "antd/es/table/ColumnGroup";
import Column from "antd/es/table/Column";

const columns = [
 {
  title: "Name",
  dataIndex: "name",
  fixed: true,
 },
 {
  title: "Email",
  dataIndex: "email",
  fixed: true,
 },
 {
  title: "Phone",
  dataIndex: "phone",
  fixed: true,
 },
 {
  title: "Job",
  dataIndex: "job",
  fixed: true,
 },
];

const AdminDashBoard = () => {
 const id = getCookie("id");
 console.log(id);
 const [job, setJob] = useState([]);
 const [cv, setCv] = useState([]);
 const fetchJob = async () => {
  const response = await getJobByCompany(id);
  setJob(response);
 };
 const fetchCv = async () => {
  const response = await getCvByCompany(id);
  var dataFinal = [];
  for (const item of response) {
   const jobName = await getJob(item.idJob);
   dataFinal.push({
    ...item,
    jobName: jobName.name,
   });
  }
  setCv(dataFinal);
 };
 useEffect(() => {
  fetchJob();
  fetchCv();
 }, []);
 console.log("JOB", job);
 console.log("CV", cv);

 const dataCv = cv.map((item) => ({
  name: item.name,
  email: item.email,
  phone: item.phone,
  job: item.jobName,
 }));

 const handleClick = (event) => {
  console.log(event);
 };
 return (
  <>
   <Table
    pagination={false}
    dataSource={dataCv}
    onRow={(record) => {
     return {
      onClick: (event) => handleClick(event),
     };
    }}
   >
    <Column title="Name" dataIndex="name" key="name" />
    <Column title="Email" dataIndex="email" key="email" />
    <Column title="Phone" dataIndex="phone" key="phone" />
    <Column title="Job" dataIndex="job" key="job" />
   </Table>
  </>
 );
};

export default AdminDashBoard;
