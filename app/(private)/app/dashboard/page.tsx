import React from "react";
import ContentBlock from "../../_comp/content-block";
import PetList from "./_comp/pet-list";
import PetDetail from "./_comp/pet-detail";
import Heading from "../../_comp/heading";
import SearchForm from "./_comp/search-form";
import PetButton from "./_comp/pet-button";

const Page = () => {
  return (
    <main>
      <Heading />
      <section className="grid min-h-[35rem] grid-rows-[3rem_1fr_2fr] gap-4 md:min-h-[30rem] md:grid-cols-3 md:grid-rows-[3rem_1fr_1fr]">
        <div className="md:col-span-1 md:col-start-1 md:row-span-1 md:row-start-1">
          <ContentBlock>
            <SearchForm />
          </ContentBlock>
        </div>
        <div className="relative  md:col-span-1 md:col-start-1  md:row-span-full md:row-start-2">
          <ContentBlock>
            <PetList />
            <PetButton actionType="add" />
          </ContentBlock>
        </div>
        <div className=" md:col-span-full md:col-start-2 md:row-span-full md:row-start-1">
          <ContentBlock>
            <PetDetail />
          </ContentBlock>
        </div>
      </section>
    </main>
  );
};

export default Page;
