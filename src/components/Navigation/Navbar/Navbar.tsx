import react from "../../../assets/react.svg";

const Navbar = () => {
  return (
    <nav className="flex mt-2 items-center p-3 border-2 rounded-2xl border-blue-200 w-9/12 justify-between absolute bg-[rgba(0,0,0,0.6)] backdrop-blur-sm text-white">
      <div className="font-bold">Dashboard</div>
      <div>
        <img src={react} alt="profile-pic" />
      </div>
    </nav>
  );
};

export default Navbar;
