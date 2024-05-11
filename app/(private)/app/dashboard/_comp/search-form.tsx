"use client";
import { Input } from "@/components/ui/input";
import React from "react";
import { useSearchContext } from "../_contexts/search-context";

type Props = {};

const SearchForm = (props: Props) => {
  const { searchQuery, handleSeachQuery } = useSearchContext();
  return (
    <form className="h-full">
      <Input
        className="h-full border-2 border-white/25 bg-white/10 placeholder:text-white/60 focus-visible:bg-white/5 focus-visible:ring-0"
        type="search"
        placeholder="Search pets"
        spellCheck={false}
        value={searchQuery}
        onChange={(event) => {
          handleSeachQuery(event.target.value);
        }}
      />
    </form>
  );
};

export default SearchForm;
