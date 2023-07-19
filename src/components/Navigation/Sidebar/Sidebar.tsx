import react from "../../../assets/react.svg";

const Sidebar = () => {
  return (
    <div className="flex-col text-white border-r-2 border-blue-200 w-1/6 h-screen absolute">
      <img src={react} alt="" />
      <div>Dashboard</div>
      <div>About</div>
      <div>Listing</div>
      <div>Bookmark</div>
      <div>Contact</div>
    </div>
  );
};

export default Sidebar;
