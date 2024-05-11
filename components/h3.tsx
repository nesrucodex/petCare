import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  children?: React.ReactNode;
};

const H3 = ({ className, children }: Props) => {
  return (
    <h2
      className={cn(
        "my-2 font-semibold uppercase tracking-wider text-stone-800 dark:text-stone-50 md:text-lg lg:text-xl",
        className,
      )}
    >
      {children}
    </h2>
  );
};

export default H3;
