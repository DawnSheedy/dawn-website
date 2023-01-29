import { useNavigate } from "react-router-dom";
import { Button } from "../general/Button";
import { CenterContentContainer } from "../ambient/layout/CenterContentContainer";
import { PageHeading } from "../ambient/layout/PageHeading";

export const NotFound = () => {
  const navigate = useNavigate();

  const homeClickHandler = () => {
    navigate("/");
  };

  return (
    <CenterContentContainer>
      <div>
        <PageHeading
          contentCategory="UNEXPECTED_ERROR"
          title="404"
          mono
          showBottomDivider
        ></PageHeading>
        <Button text="GO_HOME" onClick={homeClickHandler} />
      </div>
    </CenterContentContainer>
  );
};
