/** @format */

const Navcontrol = () => {
  return (
    <div className="container bg-black text-dim-textGray rounded-3xl">
      <div className="navcontrol flex justify-between text-3xl font-bold py-10 px-10">
        <p className="hover:text-white transition cursor-pointer before:absolute before:p-1 before:bg-dim-btnColor before:text-dim-textBtnColor before:rounded-full before:text-sm before:content-['coming_soon'] relative before:-top-7 before:left-[50%] before:ml-[-50px]">
          Trading
        </p>
        <p className="text-white">|</p>
        <p className="hover:text-white transition cursor-pointer before:absolute before:p-1 before:bg-dim-btnColor before:text-dim-textBtnColor before:rounded-full before:text-sm before:content-['coming_soon'] relative before:-top-7 before:left-[50%] before:ml-[-50px]">
          Automation
        </p>
        <p className="text-white">|</p>
        <p className="hover:text-white transition cursor-pointer before:absolute before:p-1 before:bg-dim-btnColor before:text-dim-textBtnColor before:rounded-full before:text-sm before:content-['coming_soon'] relative before:-top-7 before:left-[50%] before:ml-[-50px]">
          Portfolio
        </p>
        <p className="text-white">|</p>
        <p className="hover:text-white transition cursor-pointer active text-white">
          Alerts
        </p>
        <p className="text-white">|</p>
        <p className="hover:text-white transition cursor-pointer">Training</p>
      </div>
    </div>
  );
};

export default Navcontrol;
