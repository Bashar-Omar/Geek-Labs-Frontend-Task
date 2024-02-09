/** @format */
import Logo from "../assets/logo.png";
import SearchIcon from "../assets/search-icon.svg";
import Profile from "../assets/profile.png";
import ArrowIcon from "../assets/Arrow.svg";
const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <img
            src={Logo}
            alt="logo"
            className="logo mx-10 h-14 cursor-pointer"
          />
          <div className="flex bg-black search-box w-full justify-between align-middle items-center p-5 rounded-3xl">
            <input
              type="search"
              placeholder="Search"
              className="block p-4 ps-10 text-sm rounded-full w-96 text-gray-900 border border-gray-30 focus:outline-none"
            />
            <div className="flex text-dim-textAccSec items-center">
              <img
                src={SearchIcon}
                alt="search-icon"
                className="search-icon w-8 h-8 cursor-pointer"
              />
              <div className="profile flex justify-center">
                <img
                  src={Profile}
                  alt="profile"
                  className="profile-img rounded-full w-12 h-12 mx-5 cursor-pointer"
                />
                <div className="data flex flex-col justify-center cursor-pointer">
                  <p className="hover:text-white transition">Moni Roy</p>
                  <p className="hover:text-white transition">Admin</p>
                </div>
              </div>
              <img
                src={ArrowIcon}
                alt="Arrow"
                className="arrow-icon w-8 h-8 m-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
