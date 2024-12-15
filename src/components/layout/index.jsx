import Footer from "./Footer";
import Header from "./Header";
import ResponsiveFooter from "./ResponsiveFooter";

const Layout = ({ children, onSearch }) => {
  return (
    <>
      <Header onSearch={onSearch} />
      <main>{children}</main>
      <Footer />
      <ResponsiveFooter />
    </>
  );
};

export default Layout;
