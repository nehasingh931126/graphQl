import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { getCompanies } from '../graphql/queries';

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
    </div>
  );
}

export default CompanyDetail;
