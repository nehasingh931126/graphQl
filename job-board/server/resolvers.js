import { Company, Job } from './db.js';
export const resolvers = {
    Query: {
        job: (_root, {id}) => Job.findById(id),
        jobs: () => Job.findAll(),
        company: (_root, {id})=> Company.findById(id)
    },

    Mutation: {
        createJob: (_root, {input}, context)=> {
            const user = context.user;
            console.log("[createJob]", user);
            if (!user) {
                throw new Error('unauthorised')
            }
            // input['companyId'] = user.companyId; // Donot use this 
            console.log("[createJob]", context);
            return Job.create({ ...input, companyId: user.companyId }); // use this
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