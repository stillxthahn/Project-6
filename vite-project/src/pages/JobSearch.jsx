import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobBySeach } from "../services/jobService";
import JobsList from "../components/JobsCard";
import { getCompany } from "../services/companyService";

const JobSearch = () => {
 const { input, city } = useParams();
 console.log(input, city);
 const [jobs, setJobs] = useState([]);
 const fetchJob = async () => {
  const response = await getJobBySeach(input, city);
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
 useEffect(() => {
  fetchJob();
 }, []);
 console.log(jobs);
 return (
  <div className="xl:columns-2 sm:columns-1 gap-2">
   {jobs && jobs.map((job) => <JobsList key={job.id} job={job} />)}
  </div>
 );
};

export default JobSearch;
