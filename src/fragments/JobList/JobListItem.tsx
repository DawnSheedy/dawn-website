import { useNavigate } from "react-router-dom";
import { JobListing } from "../../content/contentTypes";
import { SlideInAll } from "../../general/SlideInAll";
import { generateClassNames } from "../../util/generateClassNames";
import "./JobListItem.css";

export const JobListItem = ({
  company,
  title,
  startDate,
  endDate,
  slug,
}: JobListing) => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(`/experience/${slug}`);
  };

  return (
    <div
      onClick={clickHandler}
      tabIndex={0}
      aria-description={`More details about role as a ${title} at ${company}`}
      role="link"
      className={generateClassNames({
        "job-list-item-container": true,
        current: !endDate,
      })}
    >
      <SlideInAll>
        <p className="job-dates mono">
          {startDate.getMonth()}/{startDate.getFullYear()} -{" "}
          {endDate
            ? `${endDate.getMonth()}/${endDate.getFullYear()}`
            : "PRESENT"}
        </p>
        <h2 className="job-company italics">{company}</h2>
        <h4 className="job-title">{title}</h4>
      </SlideInAll>
    </div>
  );
};
