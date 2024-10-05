import anglerightbig from "../assets/angle-right-big.svg";
import anglerightsmall from "../assets/angle-right-small.svg";

export default function HomePageButton(props) {
  return (
    <button
      className="text-[12px] md:text-2xl text-[#EBEBEB] font-bold bg-[#171407] border-4 border-[#FFFFFF] dark:border-[#F7F7F2] px-4 py-2 hover:shadow-[0_0_69px_3px_rgba(255,255,150,0.25)]
    hover:bg-[#1712073d] transition-all duration-100 ease-in-out dark:bg-[#D1A534]"
    >
      <div className="flex flex-row align-middle justify-center space-x-2">
        {props.children}
        <img
          src={anglerightbig}
          alt="right angle"
          className="hidden lg:block"
        ></img>
        <img
          src={anglerightsmall}
          alt="right angle"
          className="sm:block lg:hidden"
        ></img>
      </div>
    </button>
  );
}
