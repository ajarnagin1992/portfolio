import { addBasePath } from "next/dist/shared/lib/router/router";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="flex flex-row justify-center items-center p-10 bg-black text-white">
      <div
        className="
        w-full text-center space-y-10 
        lg:w-1/2 lg:text-left"
      >
        <p className=" text-7xl">{"Hi, I'm Andrew!"}</p>
        <p className="text-3xl">
          {"Full Stack Web-Developer / Software Engineer"}
        </p>
        <div>
          <Link href="https://drive.google.com/uc?export=download&id=19zKQZN3cyHFnqbUkQ-sSKbO9zoXrofFu">
            <a className="rounded p-2 bg-blue-600 hover:bg-blue-300">
              {"Download my CV!"}
            </a>
          </Link>
        </div>
      </div>
      <div className="hidden lg:block">
        <img src={addBasePath("/avatar.jpg")} alt="Placeholder Image"></img>
      </div>
    </div>
  );
};
