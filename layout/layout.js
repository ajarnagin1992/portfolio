import { Footer } from "components/Footer/Footer";
import { Navbar } from "components/Navbar/Navbar";

export const Layout = ({ children }) => {
  return (
    <div className="bg-background">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};

export function PageMargins({ children }) {
  return (
    <div className="max-w-6xl mx-auto bg-secondary p-4 md:p-10">{children}</div>
  );
}
