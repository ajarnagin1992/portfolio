import { addBasePath } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="flex flex-row items-center justify-center bg-[#003366] text-white relative h-[500px] lg:h-[700px]">
      <div
        className="
        w-full text-center space-y-10 p-10 z-10
        lg:w-1/2 lg:text-left"
      >
        <h1 className=" text-6xl">{"Hi! I'm Andrew!"}</h1>
        <p className="text-3xl">
          - Full Stack Web-Developer <br /> - Software Engineer
        </p>
        <p className="text-3xl">{}</p>
        <div>
          <Link href="https://drive.google.com/uc?export=download&id=19zKQZN3cyHFnqbUkQ-sSKbO9zoXrofFu">
            <a className="rounded p-3 bg-blue-600 hover:bg-blue-300">
              {"Download my CV!"}
            </a>
          </Link>
        </div>
      </div>
      <div className="lg:block absolute bottom-0 right-0">
        <img
          src={addBasePath("/avatar-removebg.jpg")}
          alt="Placeholder Image"
          className=" hidden lg:block lg:h-[700px]"
        ></img>
      </div>
    </div>
  );
};
