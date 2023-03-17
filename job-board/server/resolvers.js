import { Company, Job } from './db.js';
export const resolvers = {
    Query: {
        job: (_root, {id}) => Job.findById(id),
        jobs: () => Job.findAll(),
        company: (_root, {id})=> Company.findById(id)
    },

    Mutation: {
        createJob: (_root, {input}, context)=> {
            const auth = context.auth;
            if (!auth) {
                throw new Error('unauthorised')
            }
            console.log("check what context we are getting", context);
            return Job.create(input)
        },
        deleteJob: (_root, {id})=> Job.delete(id),
        updateJob: (_root, {input})=> Job.update(input)
    },

    Job: {
        company: (job) => Company.findById(job.companyId)
    },

    Company: {
        jobs: (company) => Job.findAll((job)=>job.companyId === company.id)
    }
};