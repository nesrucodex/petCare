import React, { ReactNode } from "react";
import Header from "../_comp/header";
import Footer from "../_comp/footer";
import Backgound from "../_comp/background";
import { PetContextProvider } from "../_contexts/pet-context";

import { SearchContextProvider } from "./dashboard/_contexts/search-context";
import { getPets } from "./dashboard/_util/actions";
import { Toaster } from "@/components/ui/sonner";

type Props = {
  children: ReactNode;
};

const Layout = async ({ children }: Props) => {
  const pets = await getPets();
  return (
    <>
      <Backgound />
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4">
        <SearchContextProvider>
          <PetContextProvider data={pets}>
            <Header />
            {children}
            <Footer />
          </PetContextProvider>
        </SearchContextProvider>
      </div>
      <Toaster position="top-right" />
    </>
  );
};

export default Layout;
