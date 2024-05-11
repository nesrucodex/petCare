import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const H1 = ({ className, children }: Props) => {
  return (
    <h1
      className={cn(
        "my-3 text-xl font-semibold tracking-wider text-stone-800 dark:text-stone-50  md:text-2xl lg:text-3xl",
        className,
      )}
    >
      {children}
    </h1>
  );
};

export default H1;
