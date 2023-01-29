import { JobHistory } from "../../content/JobHistory";
import { JobListItem } from "./JobListItem";

export const JobList = () => {
  return (
    <div className="job-list-container">
      {JobHistory.map((job) => (
        <JobListItem {...job} />
      ))}
    </div>
  );
};
