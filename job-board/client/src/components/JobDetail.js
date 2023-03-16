import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getJob } from '../graphql/queries';
function JobDetail() {
  const [job, setJob] = useState(null);
  const [error, setError] = useState('');
  const { jobId } = useParams();

  useEffect(()=> {
    getJob(jobId).then((job)=> {
      console.log(job)
      setJob(job);
    }).catch((error)=> {
      setError(error);
    });
  }, [jobId]);

  if(!job) {
    return <p>Loading</p>
  }

  if(error) {
    return <p>Something went wrong</p>
  }
  return (
    <div>
      <h1 className="title">
        {job.title}
      </h1>
      <h2 className="subtitle">
        <Link to={`/companies/${job.company.id}`}>
          {job.company.name}
        </Link>
      </h2>
      <div className="box">
        {job.description}
      </div>
    </div>
  );
}

export default JobDetail;
