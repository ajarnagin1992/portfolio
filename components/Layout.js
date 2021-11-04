import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout = ({ children, ...metadata }) => {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
