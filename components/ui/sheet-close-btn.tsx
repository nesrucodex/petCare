import React, { useRef } from "react";
import { SheetClose } from "./sheet";
import { Button } from "./button";

type Props = {
  ref: React.MutableRefObject<HTMLButtonElement | null>;
};

const SheetCloseButton = ({ ref }: Props) => {
  return (
    <SheetClose asChild ref={ref}>
      <Button className="invisible">
        Close
      </Button>
    </SheetClose>
  );
};

export default SheetCloseButton;
