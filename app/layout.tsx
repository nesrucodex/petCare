import { ReactNode } from "react";

import { Lato } from "next/font/google";

import "./styles/global.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});
type Props = { children: ReactNode };

const layout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className={`${lato.className} min-h-screen bg-neutral-100`}>
        {children}</body>
    </html>
  );
};

export default layout;
