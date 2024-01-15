import { Link } from "react-router-dom";

const JobsCard = (job) => {
 console.log(job.job.id);
 return (
  <div
   key={job.job.id}
   className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-12 h-80"
  >
   <Link to={`/jobs/${job.job.id}`}>
    <div className="flex items-center">
     <div className="h-48 md:w-48 card__image ml-2 ">
      <img
       className="h-full w-full object-cover overflow-hidden"
       src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${job.job.id}`}
       alt=""
      />
     </div>
     <div className="p-8 text-black flex flex-col gap-4 justify-center">
      <p className=" uppercase tracking-wide text-indigo-500 font-bold text-lg h-16">
       {job.job.name}
      </p>
      <div className="flex flex-col gap-2">
       <p className="block text-lg leading-tight font-bold text-black">
        {job.job.company.companyName}
       </p>
       <div className="flex items-center">
        <div className="font-bold text-black">Salary:</div>
        <div className="py-1 px-2 bg-indigo-500 text-white ml-2 font-semibold rounded-xl">
         {job.job.salary}$
        </div>
       </div>
       <div className="flex items-center">
        <div className="font-bold text-black">City: </div>
        <div className="inline-flex flex-wrap">
         {job.job.city &&
          job.job.city.map((item, index) => (
           <p
            key={index}
            className="inline-block py-1 px-2 bg-indigo-500 text-white ml-2 font-semibold rounded-xl"
           >
            {item}
           </p>
          ))}
        </div>
       </div>
      </div>
      {/* <p className="mt-2 text-slate-500">Addres: {job.job.company.address}</p> */}
      <div className="flex flex-wrap mt-4 gap-2">
       {job.job.tags.map((tag, index) => (
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
   </Link>
  </div>
 );
};

export default JobsCard;
