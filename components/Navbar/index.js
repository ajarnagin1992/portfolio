import { addBasePath } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaLinkedin, FaGithub, FaGit } from "react-icons/fa";

export const Navbar = () => {
  return (
    <NavContainer>
      <div>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-8">
            <AvatarSection />
            <LinkSection className="hidden md:flex" />
          </div>
          <SocialLinks />
        </div>
        <LinkSection className="mt-4 flex md:hidden" />
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

function SocialLinks(props) {
  return (
    <div className="flex flex-row space-x-4">
      <a
        href={"https://www.linkedin.com/in/ajarnagin1992/"}
        target="_blank"
        rel="noreferrer"
        className="text-base font-normal text-white dark:text-gray-300"
      >
        <FaLinkedin className="h-6 w-6 md:h-8 md:w-8" />
      </a>
      <a
        href={"https://github.com/ajarnagin1992"}
        target="_blank"
        rel="noreferrer"
        className="text-base font-normal text-white dark:text-gray-300"
      >
        <FaGithub className="h-6 w-6 md:h-8 md:w-8" />
      </a>
    </div>
  );
}

function NavContainer(props) {
  return (
    <nav
      className={`
      bg-black text-white max-w-full px-4 py-2 
      md:px-10 md:py-4 ${props.className}`}
    >
      {props.children}
    </nav>
  );
}

function LinkSection(props) {
  const router = useRouter();
  const hoverstyle = "bg-blue-600 rounded";

  return (
    <div className={props.className}>
      <Link href="/about">
        <a
          className={`text-base px-3 py-1 ${
            router.asPath === "/about" ? hoverstyle : ""
          }`}
        >
          About
        </a>
      </Link>
      {/* <Link href="/projects">
              <a>Projects</a>
            </Link> */}
      <Link href="/contact">
        <a
          className={`text-base px-3 py-1 ${
            router.asPath === "/contact" ? hoverstyle : ""
          }`}
        >
          Contact
        </a>
      </Link>
    </div>
  );
}

function AvatarSection(props) {
  return (
    <div className="flex flex-row space-x-4">
      <Link href="/">
        <a className="h-12 w-12">
          <img
            src={addBasePath("/avatar.jpg")}
            alt="AvatarIcon"
            className="rounded-full object-contain h-12"
          />
        </a>
      </Link>
      <Link href="/">
        <a>
          <p className="font-semibold">Andrew Jarnagin</p>
          <p className="font-light">Software Developer</p>
        </a>
      </Link>
    </div>
  );
}
