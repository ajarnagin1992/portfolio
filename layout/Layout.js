import { Footer } from "components/Footer/Footer";
import { Navbar } from "components/Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
