import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getCompanies } from '../graphql/queries';
import JobList from './JobList';

function CompanyDetail() {
  const { companyId } = useParams();
  const [company, setCompanies] = useState(null);
  

  useEffect(()=> {
    getCompanies(companyId).then((company)=> {
      setCompanies(company);
    });
  }, [companyId]);

  if (!company) {
    return <p>Loading</p>
  }

  return (
    <div>
      <h1 className="title">
        {company.name}
      </h1>
      <div className="box">
        {company.description}
      </div>
      <h5 class="title is-5">
        Jobs at {company.name} 

        <JobList jobs={company.jobs}></JobList>
      </h5>
    </div>
  );
}

export default CompanyDetail;
