import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getTags } from "../services/tagService";
import { getJobByTag } from "../services/jobService";
import { getCompany } from "../services/companyService";
import JobsList from "../components/JobsCard";
const JobTab = () => {
 const key = useParams();
 console.log(key.key);
 const [jobs, setJobs] = useState([]);
 const [tag, setTag] = useState([]);
 const fetchJobs = async () => {
  const response = await getJobByTag(tag[0].value);
  // setJobs(response)
  const dataFinal = [];
  for (const job of response) {
   const company = await getCompany(job.idCompany);
   dataFinal.push({
    ...job,
    company: company,
   });
  }
  setJobs(dataFinal);
 };
 const fetchTag = async () => {
  const response = await getTags(key.key);
  setTag(response);
 };

 useEffect(() => {
  fetchTag();
 }, []);
 useEffect(() => {
  if (tag[0]) {
   fetchJobs();
  }
 }, [tag[0]]);
 if (tag[0]) {
  console.log(tag[0].value);
 }
 console.log(jobs);

 return (
  <div className="xl:columns-2 sm:columns-1 gap-2">
   {jobs && jobs.map((job) => <JobsList key={job.id} job={job} />)}
  </div>
 );
};

export default JobTab;
