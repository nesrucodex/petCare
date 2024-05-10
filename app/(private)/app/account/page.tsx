import H1 from "@/components/h1";
import React from "react";
import Heading from "../../_comp/heading";
import ContentBlock from "../../_comp/content-block";

const Page = () => {
  return (
    <main>
      <Heading />
      <ContentBlock className="grid h-[25rem] place-items-center bg-white">
        <p>You logged as ...</p>
      </ContentBlock>
    </main>
  );
};

export default Page;
