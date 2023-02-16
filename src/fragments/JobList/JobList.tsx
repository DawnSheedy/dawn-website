import { JobHistory } from "../../content/JobHistory";
import { JobListItem } from "./JobListItem";
import './JobList.scss'

export const JobList = () => {
  return (
    <div className="job-list-container">
      {JobHistory.map((job) => (
        <JobListItem {...job} />
      ))}
    </div>
  );
};
