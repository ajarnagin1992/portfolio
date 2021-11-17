import { Footer } from "components/Footer";
import { Navbar } from "components/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};