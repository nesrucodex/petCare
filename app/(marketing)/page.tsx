import H1 from "@/components/h1";
import H3 from "@/components/h3";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  return (
    <main>
      <div className="-z-1 absolute inset-0 h-screen bg-gradient-to-br from-slate-600 to-orange-600">
        <Image
          src="/images/img_02.jpg"
          className="object-cover"
          fill
          alt="Background"
        />
        <div className="absolute inset-0 h-full bg-black/30" />
       
      </div>
      <section className="relative z-10 flex h-screen flex-col items-center justify-center">
        <H1 className="text-[3rem] md:text-[5rem]  lg:text-[7rem] text-white">PetCare</H1>
        <H3 className="text-center opacity-70 text-white max-w-lg">
          Welcome to PetCare! At PetCare, we understand that your pets are more
          than just animals.
        </H3>
        <div className="flex items-center gap-x-5 mt-7">
          <Button size={"lg"} className="rounded-md uppercase shadow" variant={"secondary"}>
            <Link href="#">Register</Link>
          </Button>
          <Button size={"lg"} className="rounded-md uppercase shadow">
            <Link href="/app/dashboard">Start</Link>
          </Button>
        </div>
        <div className="mt-[5rem]">
          <section className="flex flex-wrap items-center justify-center gap-4">
            <p className="rounded-md border-2 border-white/40 bg-black/40 px-4 py-1.5 text-sm text-white/80">
              Safe, comfortable accommodations for your pets
            </p>
            <p className="rounded-md border-2 border-white/40 bg-black/40 px-4 py-1.5 text-sm text-white/80">
              Regular walks and play sessions
            </p>
            <p className="rounded-md border-2 border-white/40 bg-black/40 px-4 py-1.5 text-sm text-white/80">
              Tailored to your pet&apos;s needs
            </p>
            <p className="rounded-md border-2 border-white/40 bg-black/40 px-4 py-1.5 text-sm text-white/80">
              Professional grooming for a fresh look
            </p>
            <p className="rounded-md border-2 border-white/40 bg-black/40 px-4 py-1.5 text-sm text-white/80">
              Reliable transportation to and from our facility
            </p>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Page;
