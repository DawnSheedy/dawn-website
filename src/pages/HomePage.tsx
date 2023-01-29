import { Route, Routes, useLocation, useParams } from "react-router-dom";
import { Button } from "../general/Button";
import { CenterContentContainer } from "../ambient/layout/CenterContentContainer";
import { CollapsibleContentArea } from "../ambient/layout/CollapsibleContentArea";
import { PageHeading } from "../ambient/layout/PageHeading";
import { About } from "./About";

export const HomePage = () => {
  const { pathname: section } = useLocation();

  return (
    <CenterContentContainer>
      <div>
        <PageHeading
          title="Dawn Sheedy"
          titleFlavorText="[she/they]"
          subTitle="Software Engineer // Seattle"
          showBottomDivider
        ></PageHeading>
        <Button
          text="ABOUT"
          internalHref={section === "/home/about" ? "/home" : "/home/about"}
          active={section === "/home/about"}
        />
        <Button
          text="PROJECTS"
          internalHref={section === "/home/projects" ? "/home" : "/home/projects"}
          active={section === "/home/projects"}
        />
        <Button
          text="CONTACT"
          internalHref={section === "/home/contact" ? "/home" : "/home/contact"}
          active={section === "/home/contact"}
        />
      </div>
      <CollapsibleContentArea collapsed={section === "/home"}>
        <Routes>
          <Route path="/about" element={<About />} />
        </Routes>
      </CollapsibleContentArea>
    </CenterContentContainer>
  );
};
