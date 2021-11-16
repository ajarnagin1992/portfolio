import { addBasePath } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub, FaGit } from "react-icons/fa";

export const Navbar = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row items-center space-x-8">
            <AvatarSection />
            <LinkSection className="space-x-5 hidden md:block" />
          </div>
          <SocialLinks />
        </div>
        <LinkSection className="space-x-3 mt-4 block md:hidden" />
      </div>
    </NavContainer>
  );
};

function MobileNav(props) {
  return;
}

function Nav(props) {
  return;
}

function SocialLinks() {
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
    <nav
      className="
      bg-black text-white max-w-full px-4 py-2 
      md:px-10 md:py-4"
    >
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
