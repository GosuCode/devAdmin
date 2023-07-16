import PropTypes from "prop-types";
import Navbar from "../../components/toolbar/Navbar";

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
