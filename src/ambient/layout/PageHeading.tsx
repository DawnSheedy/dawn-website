import { generateAnimationDelay } from "../../util/generateAnimationDelay";
import { generateClassNames } from "../../util/generateClassNames";
import { HorizontalLine } from "./HorizontalLine";
import "./PageHeading.css";

export interface PageHeadingProps {
  title: string;
  titleFlavorText?: string;
  subTitle?: string;
  description?: string;
  contentDate?: Date;
  contentCategory?: string;
  showBottomDivider?: boolean;
  mono?: boolean;
}

export const PageHeading = ({
  title,
  titleFlavorText,
  subTitle,
  contentDate,
  contentCategory,
  description,
  showBottomDivider,
  mono,
}: PageHeadingProps) => {
  const showDetailRow = contentDate || contentCategory;

  const generateTitleTextItems = () => {
    return title.split(" ").map((word, index) => (
      <h1
        className="italics page-heading-title title-text-block heavy-weight no-margin shift-in"
        key={`${word}-title-${index}`}
        style={generateAnimationDelay(100, 300)}
      >
        {word}
      </h1>
    ));
  };

  return (
    <div className="page-heading-container">
      {showDetailRow && (
        <div
          className="quote-container mono italics shift-in"
          style={generateAnimationDelay(200, 400)}
        >
          {contentCategory ? `${contentCategory}` : ""}
          {contentCategory && contentDate ? "//" : ""}
          {contentDate ? contentDate.toLocaleDateString() : ""}
        </div>
      )}
      <div
        className={generateClassNames({
          "title-row": true,
          "mono-flashy": mono,
        })}
      >
        {generateTitleTextItems()}
        {titleFlavorText && (
          <h1
            className="flavor-text light-weight no-margin shift-in"
            style={generateAnimationDelay(100, 300)}
          >
            {titleFlavorText}
          </h1>
        )}
      </div>
      {subTitle && (
        <h2
          className="page-heading-title italics shift-in"
          style={generateAnimationDelay(100, 400)}
        >
          {subTitle}
        </h2>
      )}
      {description && (
        <div
          className="quote-container mono italics shift-in"
          style={generateAnimationDelay(200, 400)}
        >
          {description}
        </div>
      )}
      {showBottomDivider && <HorizontalLine />}
    </div>
  );
};
