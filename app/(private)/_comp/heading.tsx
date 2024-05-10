"use client";

import { usePetContext } from "@/app/(private)/_contexts/pet-context";
import H1 from "@/components/h1";
import React from "react";

type Props = {};

const Heading = (props: Props) => {
  const { pets } = usePetContext();
  return (
    <section className="my-7 flex items-center justify-between gap-x-7">
      <div>
        <H1 className="text-3xl tracking-tighter text-white md:text-5xl ">
          PetCare
        </H1>
        <p className="max-w-sm text-sm text-white/70 md:max-w-md md:text-base">
          <span className="text-semibold tracking-tighter text-white">
            PetCare
          </span>{" "}
          is a place for keeping your pets.
        </p>
      </div>

      <div className="flex items-center gap-x-2 text-white bg-white/10 px-3 py-1.5 rounded-md border-2 border-white/20  ">
        <p className="text-xl font-bold md:text-2xl">{pets.length}</p>
        <p className="whitespace-nowrap text-xs">Pets</p>
      </div>
    </section>
  );
};

export default Heading;
