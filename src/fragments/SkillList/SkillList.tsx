import { useEffect, useState } from "react";
import { Skill, SkillCategory } from "../../content/contentTypes";
import { SkillListRecord } from "../../content/SkillList";
import { generateClassNames } from "../../util/generateClassNames";
import "./SkillList.css";
import { SkillListItem } from "./SkillListItem";

export interface SkillListProps {
  skillSet?: Skill[];
}

export const SkillList = ({ skillSet }: SkillListProps) => {
  const [skillList, setSkillList] = useState(
    skillSet ? skillSet : Object.values(SkillListRecord)
  );
  const [filter, setFilter] = useState<SkillCategory>(
    SkillCategory.PROGRAMMING
  );

  useEffect(() => {
    setSkillList(
      [...(skillSet ? skillSet : Object.values(SkillListRecord)).filter(
        (value) => value.category === filter
      )]
    );
  }, [skillSet, filter]);

  const getFilterCallback = (filter: SkillCategory) => {
    return () => {
      setFilter(filter);
    };
  };

  return (
    <div className="skill-list-container">
      <div className="skill-list-container-header">
        <button
          className={generateClassNames({
            "skill-list-tab": true,
            mono: true,
            capital: true,
            active: filter === SkillCategory.PROGRAMMING,
          })}
          onClick={getFilterCallback(SkillCategory.PROGRAMMING)}
        >
          Development
        </button>
        <button
          className={generateClassNames({
            "skill-list-tab": true,
            mono: true,
            capital: true,
            active: filter === SkillCategory.LIBRARIES,
          })}
          onClick={getFilterCallback(SkillCategory.LIBRARIES)}
        >
          Libraries & Apis
        </button>
        <button
          className={generateClassNames({
            "skill-list-tab": true,
            mono: true,
            capital: true,
            active: filter === SkillCategory.DEPLOYMENTS,
          })}
          onClick={getFilterCallback(SkillCategory.DEPLOYMENTS)}
        >
          Tools
        </button>
        <button
          className={generateClassNames({
            "skill-list-tab": true,
            mono: true,
            capital: true,
            active: filter === SkillCategory.BUSINESS,
          })}
          onClick={getFilterCallback(SkillCategory.BUSINESS)}
        >
          Business
        </button>
        <button
          className={generateClassNames({
            "skill-list-tab": true,
            mono: true,
            capital: true,
            active: filter === SkillCategory.MISC,
          })}
          onClick={getFilterCallback(SkillCategory.MISC)}
        >
          MISC
        </button>
      </div>
      <div className="skill-list-container-body">
        {skillList.map((skill) => (
          <SkillListItem key={skill.skillName} skill={skill} />
        ))}
      </div>
    </div>
  );
};
