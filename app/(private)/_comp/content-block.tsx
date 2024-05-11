import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

const ContentBlock = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "h-full w-full overflow-hidden rounded-md shadow-md",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ContentBlock;
