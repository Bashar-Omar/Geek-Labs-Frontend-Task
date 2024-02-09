/** @format */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCircleCheck,
  faCoins,
  faDollarSign,
  faFileContract,
  faPercent,
} from "@fortawesome/free-solid-svg-icons";

const Filters = () => {
  return (
    <div className="dataholding flex gap-8">
      <div className="filters w-[30%] flex flex-col bg-black p-8 mt-5 rounded-3xl">
        <div className="container">
          <h1 className="text-white bold text-3xl text-center pb-5 font-bold">
            Filters
          </h1>
          <div className="input-industry flex flex-col mb-5">
            <label className="text-white mb-2">Industry</label>
            <input
              type="text"
              placeholder="Health care."
              className="text-slate-300 p-2 bg-transparent outline outline-2 outline-slate-300 rounded-lg"
            />
            <p className=" text-gray-500 mt-1">Choose something.</p>
          </div>
          <div className="input-cap flex flex-col mb-5">
            <label className="text-white mb-2">Market Cap</label>
            <input
              type="text"
              placeholder="Large-cap"
              className="text-slate-300 p-2 bg-transparent outline outline-2 outline-slate-300 rounded-lg"
            />
            <p className=" text-gray-500 mt-1">Press Apply to see changes.</p>
          </div>
          <div className="input-risk flex flex-col mb-5">
            <label className="text-white mb-2">Risk</label>
            <input
              type="text"
              placeholder="Insert text here"
              className="text-slate-300 p-2 bg-transparent outline outline-2 outline-slate-300 rounded-lg"
            />
            <ul className="text-white outline mt-5 outline-2 outline-slate-300 rounded-lg p-2">
              <li className="cursor-pointer active bg-white text-gray-500 py-3 px-2 rounded-lg mb-4 hover:text-dim-textAcc transition">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                Low risk
              </li>
              <li className="cursor-pointer px-2 mb-4 hover:text-dim-textAcc transition">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                Mid-risk
              </li>
              <li className="cursor-pointer text-dim-textAcc px-2 mb-4 hover:text-white transition">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                High risk
              </li>
              <li className="cursor-pointer px-2 mb-4 hover:text-dim-textAcc transition">
                <FontAwesomeIcon icon={faCircleCheck} className="mr-2" />
                Option text here
              </li>
            </ul>
            <button className="btn bg-dim-textAcc mt-6 p-4 font-bold text-white rounded-lg hover:bg-dim-textAccHover transition">
              Apply Filters
            </button>
          </div>
        </div>
      </div>
      <div className="dataholding w-[70%] flex bg-black p-8 mt-5 rounded-3xl">
        <div className="container">
          <div className="text-white py-3 px-8 text-xl rounded-3xl bggradient">
            <div className="nav flex justify-between">
              <p>
                <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
                TSLA
              </p>
              <p>|</p>
              <p>
                <FontAwesomeIcon icon={faFileContract} className="mr-2" />
                200 Contracts
              </p>
              <p>|</p>
              <p>
                <FontAwesomeIcon icon={faPercent} className="mr-2" />
                12.2%
              </p>
              <p>|</p>
              <p>
                <FontAwesomeIcon icon={faCoins} className="mr-2" />
                High risk
              </p>
            </div>
            <p className="text-2xl mt-4">
              Someone Just bought xxxx contracts of $XYZ, this is notable
              because the relative volume on this options trade is X.X%.
            </p>
          </div>
          <div className="text-white mt-5 data">
            <p className="outline outline-2 outline-slate-300 rounded-lg p-2 mt-6 flex h-16 items-center">
              X company released a short report on $XYZ, High IV option sales
              opps
            </p>
            <p className="outline outline-2 outline-slate-300 rounded-lg p-2 mt-6 flex h-16 items-center">
              $XYZ just announced an acquisition of $ABC at $X. This is an
              arbitrage opportunity, with the max gain being %X if the deal
              closes, but the possible risk is %Y if the deal fails.
            </p>
            <p className="outline outline-2 outline-slate-300 rounded-lg p-2 mt-6 flex h-16 items-center">
              $XYZ just announced an acquisition of $ABC at $X. This is an
              arbitrage opportunity, with the max gain being %X if the deal
              closes, but the possible risk is %Y if the deal fails.
            </p>
            <p className="outline outline-2 outline-slate-300 rounded-lg p-2 mt-6 flex h-16 items-center">
              $XYZ just announced an acquisition of $ABC at $X. This is an
              arbitrage opportunity, with the max gain being %X if the deal
              closes, but the possible risk is %Y if the deal fails.
            </p>
            <p className="outline outline-2 outline-slate-300 rounded-lg p-2 mt-6 flex h-16 items-center">
              $XYZ just announced an acquisition of $ABC at $X. This is an
              arbitrage opportunity, with the max gain being %X if the deal
              closes, but the possible risk is %Y if the deal fails.
            </p>
            <p className="outline outline-2 outline-slate-300 rounded-lg p-2 mt-6 flex h-16 items-center">
              $XYZ just announced an acquisition of $ABC at $X. This is an
              arbitrage opportunity, with the max gain being %X if the deal
              closes, but the possible risk is %Y if the deal fails.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
