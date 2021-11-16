import { addBasePath } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub, FaGit } from "react-icons/fa";

export const Navbar = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <div className="flex flex-row space-x-12 items-center">
        <AvatarSection />
        <LinkSection className="hidden md:block space-x-5" />
      </div>
      <SocialContainer />
      <LinkSection className="space-x-3 block md:hidden mt-4" />
    </NavContainer>
  );
};

function SocialContainer() {
  return (
    <div className="flex flex-row space-x-4">
      <a
        href={"https://www.linkedin.com/in/ajarnagin1992/"}
        className="text-base font-normal text-white dark:text-gray-300"
      >
        <FaLinkedin className="h-5 w-5" />
      </a>
      <a
        href={"https://github.com/ajarnagin1992"}
        className="text-base font-normal text-white dark:text-gray-300"
      >
        <FaGithub className="h-5 w-5" />
      </a>
    </div>
  );
}

function NavContainer(props) {
  return (
    <nav className="bg-black text-white max-w-full md:px-10 px-4 md:py-4 py-2 justify-between items-center flex flex-col md:flex-row">
      {props.children}
    </nav>
  );
}

function LinkSection(props) {
  return (
    <div className={props.className}>
      <Link href="/about">
        <a>About</a>
      </Link>
      {/* <Link href="/projects">
              <a>Projects</a>
            </Link> */}
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </div>
  );
}

function AvatarSection(props) {
  return (
    <div className="flex flex-row space-x-4">
      <Link href="/">
        <a className="w-12 h-12">
          <img
            src={addBasePath("/avatar.jpg")}
            alt="AvatarIcon"
            className="rounded-full object-contain h-12"
          />
        </a>
      </Link>
      <Link href="/">
        <a className="">
          <p className="font-semibold">Andrew Jarnagin</p>
          <p className="font-light">Software Developer</p>
        </a>
      </Link>
    </div>
  );
}
