import NavBar from "./Layout/NavBar";
import Footer from "./Layout/Footer";
import './assets/styles.css';

const Layout = () => {
  return (
    <>
        <div className="layout-component">
            <NavBar />
            <Footer />
        </div>
    </>
  )
};

export default Layout;