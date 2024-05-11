import { cn } from "@/lib/utils";
import { Loader2Icon, LoaderCircleIcon } from "lucide-react";
import React from "react";

type Props = {
  size?: number;
  sw?: number;
};

const Loading = ({ size = 50, sw = 1 }: Props) => {
  return (
    <div className="grid h-full w-full place-items-center">
      <LoaderCircleIcon
        size={size}
        className={cn("animate-spin text-black/15")}
        strokeWidth={sw}
      />
    </div>
  );
};

export default Loading;
