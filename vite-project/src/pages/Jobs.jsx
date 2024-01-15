import { useEffect, useState } from "react";
import { getJob } from "../services/jobService";
import { useParams } from "react-router";
import { getCompany } from "../services/companyService";
import { Tabs } from "antd";

const Jobs = () => {
 const id = useParams();
 console.log(id.id);
 const [job, setJob] = useState(null);
 const fetchJob = async () => {
  const response = await getJob(id.id);
  const company = await getCompany(response.idCompany);
  const dataFinal = {
   ...response,
   company: company,
  };
  setJob(dataFinal);
 };
 useEffect(() => {
  fetchJob();
 }, []);
 console.log(job);

 var data = [];
 if (job) {
  const jobDes = job.description;
  const comDes = job.company.description;
  console.log(jobDes);
  data = [
   {
    label: (
     <div
      style={{
       fontSize: "16px",
       fontWeight: 600,
      }}
     >
      Job Description
     </div>
    ),
    key: 1,
    children: (
     <div
      style={{
       marginLeft: "24px",
       marginRight: "24px",
       marginBottom: "24px",
       whiteSpace: "pre-wrap",
       fontSize: "16px",
      }}
     >
      {jobDes}
     </div>
    ),
   },
   {
    label: (
     <div
      style={{
       fontSize: "16px",
       fontWeight: 600,
      }}
     >
      Company Description
     </div>
    ),
    key: 2,
    children: (
     <div
      style={{
       marginLeft: "24px",
       marginRight: "24px",
       marginBottom: "24px",
       whiteSpace: "pre-wrap",
       fontSize: "16px",
      }}
     >
      {comDes}
     </div>
    ),
   },
  ];
 }
 return (
  <>
   {job && (
    <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-4">
     <div className="flex items-center">
      <div className="h-48 w-48 md:h-64 md:w-64">
       <img
        className="h-full w-full object-cover overflow-hidden"
        src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${job.id}`}
        alt=""
       />
      </div>
      <div className="p-8 text-black">
       <p className="uppercase tracking-wide text-indigo-500 font-bold text-lg">
        {job.name}
       </p>
       <p className="mt-4 block text-lg leading-tight font-bold text-black">
        {job.company.companyName}
       </p>
       <p className="mt-4 font-bold text-black inline-block">Salary:</p>
       <p className="inline-block py-1 px-2 bg-indigo-500 text-white ml-2 font-semibold rounded-xl">
        {job.salary}$
       </p>
       <br />

       <p className="mt-4 font-bold text-black inline-block">City: </p>
       <div className="inline-flex flex-wrap">
        {job.city &&
         job.city.map((item, index) => (
          <p
           key={index}
           className="inline-block py-1 px-2 bg-indigo-500 text-white ml-2 font-semibold rounded-xl"
          >
           {item}
          </p>
         ))}
       </div>
       <br />
       <p className="mt-4 font-bold text-black inline-block">Address:</p>
       <p className="inline-block py-1 px-2 bg-indigo-500 text-white ml-2 font-semibold rounded-xl">
        {job.company.address}
       </p>
       {/* <p className="mt-2 text-slate-500">Addres: {job.job.company.address}</p> */}
       <div className="flex flex-wrap mt-4 gap-2">
        {job.tags.map((tag, index) => (
         <div
          key={index}
          className="py-1 px-2  bg-indigo-500 text-white font-semibold rounded-xl"
         >
          {tag}
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   )}
   <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden mb-12">
    <Tabs defaultActiveKey="1" centered items={data} />
   </div>
  </>
 );
};

export default Jobs;
