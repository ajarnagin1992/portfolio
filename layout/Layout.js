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

export function PageMargins({ children }) {
  return (
    <div className="max-w-6xl mx-auto bg-white p-4 md:p-10">{children}</div>
  );
}
