import { Route, Routes, useLocation } from "react-router-dom";
import { Button } from "../general/Button";
import { CenterContentContainer } from "../ambient/layout/CenterContentContainer";
import { CollapsibleContentArea } from "../ambient/layout/CollapsibleContentArea";
import { PageHeading } from "../ambient/layout/PageHeading";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./About"));
const Contact = lazy(() => import("./Contact"));

const HomePage = () => {
  const { pathname: section } = useLocation();

  return (
    <CenterContentContainer>
      <div>
        <PageHeading
          title="Dawn Sheedy"
          titleFlavorText="[she/they]"
          subTitle="Software Engineer // Seattle"
          description="I make [and break] modern, responsive web apps."
          showBottomDivider
        ></PageHeading>
        <Button
          text="ABOUT"
          internalHref={section === "/home/about" ? "/home" : "/home/about"}
          active={section === "/home/about"}
        />
        {/* <Button
          text="PROJECTS"
          internalHref={section === "/home/projects" ? "/home" : "/home/projects"}
          active={section === "/home/projects"}
        /> */}
        <Button
          text="CONTACT"
          internalHref={section === "/home/contact" ? "/home" : "/home/contact"}
          active={section === "/home/contact"}
        />
        <Button href="/resume-dawn-2023.pdf" text="Resume" />
      </div>
      <CollapsibleContentArea collapsed={section === "/home"}>
        <Suspense fallback={<h2>Loading, hang on! ⏳</h2>}>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </CollapsibleContentArea>
    </CenterContentContainer>
  );
};

export default HomePage;
