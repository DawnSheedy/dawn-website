import { useState } from "react";
import { Skill } from "../../content/contentTypes";
import { generateAnimationDelay } from "../../util/generateAnimationDelay";
import "./SkillListItem.scss";

export interface SkillListItemProps {
  skill: Skill;
}

export const SkillListItem = ({ skill }: SkillListItemProps) => {
  const animationDelay = useState(generateAnimationDelay(0, 250))[0];
  return (
    <div className="skill-list-item-container shift-in" style={animationDelay}>
      {skill.skillName}
    </div>
  );
};
