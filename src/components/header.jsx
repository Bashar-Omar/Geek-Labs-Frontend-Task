/** @format */

const Header = () => {
  return (
    <header>
      <div className="container mx-auto py-5">
        <div className="flex justify-between items-center">
          <img
            src="/src/assets/logo.png"
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
                src="/src/assets/search-icon.svg"
                alt="logo"
                className="search-icon w-8 h-8 cursor-pointer"
              />
              <div className="profile flex justify-center">
                <img
                  src="/src/assets/profile.png"
                  alt="profile"
                  className="profile-img rounded-full w-12 h-12 mx-5 cursor-pointer"
                />
                <div className="data flex flex-col justify-center cursor-pointer">
                  <p className="hover:text-white transition">Moni Roy</p>
                  <p className="hover:text-white transition">Admin</p>
                </div>
              </div>
              <img
                src="/src/assets/Arrow.svg"
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
