import { addBasePath } from "next/dist/shared/lib/router/router";

export const HeroSection = () => {
  return (
    <div className="flex flex-row justify-center items-start overflow-hidden">
      <div className="w-full md:w-1/2 text-center md:text-left p-20 space-y-20">
        <p className="text-4xl">Dolore exercitation.</p>
        <p className="text-4xl">Nulla anim deserunt.</p>
        <p className="text-4xl">Reprehenderit incididunt.</p>
      </div>
      <div className="hidden lg:block relative w-full md:w-1/2 p-20">
        <img src={addBasePath("/placeholder-hero.jpg")}></img>
      </div>
    </div>
  );
};
