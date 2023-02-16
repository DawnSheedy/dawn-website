import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CenterContentContainer } from "../ambient/layout/CenterContentContainer";
import { HorizontalLine } from "../ambient/layout/HorizontalLine";
import { PageHeading } from "../ambient/layout/PageHeading";
import { JobListing } from "../content/contentTypes";
import { JobHistory } from "../content/JobHistory";
import { SkillList } from "../fragments/SkillList/SkillList";
import { Button } from "../general/Button";
import { SlideInAll } from "../general/SlideInAll";

/**
 * Page for rendering a JobListing
 * Pulls context based on slug in params { jobSlug }
 */
export const ExperienceDetailPage = () => {
  const { jobSlug } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState<JobListing>(JobHistory[0]);

  // Effect to load job from provided slug
  // Navs to 404 if not found.
  useEffect(() => {
    const resolvedJob = JobHistory.find((listing) => listing.slug === jobSlug);
    if (!resolvedJob) {
      navigate("/404");
      return;
    }
    setJob(resolvedJob);
  }, [jobSlug]);

  return (
    <CenterContentContainer>
      <div>
        <PageHeading
          title={job.company}
          subTitle={job.title}
          contentCategory={`${job.startDate.getMonth()}/${job.startDate.getFullYear()} -
                ${
                  job.endDate
                    ? `${job.endDate.getMonth()}/${job.endDate.getFullYear()}`
                    : "PRESENT"
                }`}
          showBottomDivider
        />
        <Button text="HOME" internalHref={"/home"} />
        <Button text="COMPANY WEBSITE" href={job.website} />
      </div>
      <div className="page-container">
        <SlideInAll>
          <h2>Skills 🧠</h2>
          <HorizontalLine leftBrace={false} />
          <SkillList skillSet={job.skills} />
        </SlideInAll>
        {job.richContent?.map((content) => (
          <SlideInAll>
            <h2>{content.heading}</h2>
            <HorizontalLine leftBrace={false} />
            {content.paragraphs.map((paragraph) => (
              <p>{paragraph}</p>
            ))}
          </SlideInAll>
        ))}
      </div>
    </CenterContentContainer>
  );
};
