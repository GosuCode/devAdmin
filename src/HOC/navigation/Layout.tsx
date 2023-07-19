import Navbar from "../../components/Navigation/Navbar/Navbar";
import Sidebar from "../../components/Navigation/Sidebar/Sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex">
      <div className="w-1/6">
        <Sidebar />
      </div>
      <div className="w-5/6">
        <div className="flex justify-center">
          <Navbar />
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
