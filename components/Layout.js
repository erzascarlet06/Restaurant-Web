import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname === '/user/login' ? false : true;
  const showRegHeader = router.pathname === '/user/register' ? false : true;
  return (
    <>
      {showHeader && showRegHeader && <Navbar />}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
