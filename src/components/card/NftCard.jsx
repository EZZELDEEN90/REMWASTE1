import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import Card from "components/card";
import { MdWarningAmber } from "react-icons/md";
import { BsMinecartLoaded } from "react-icons/bs";

const NftCard = ({
  title,
  author,
  price,
  image,
  road,
  extra,
  id,
  selected,
}) => {
  const [heart, setHeart] = useState(true);
  // console.log(selected,"selected")
  let border;
  let selectBtn = "Select This Skip";
  let selectcss = "bg-gray-900";
  if (selected === id) {
    border = "border border-red-600";
    selectBtn = "Selected";
    selectcss = "bg-red-900";
  }
  return (
    <Card
      extra={`flex flex-col w-full h-full !p-4 3xl:p-![18px] bg-white ${border}`}
    >
      <div className="h-full w-full">
        <div className="relative w-full">
          <img
            src={image}
            className="mb-3 h-full w-full rounded-xl 3xl:h-full 3xl:w-full"
            alt=""
          />
          <button
            onClick={() => setHeart(!heart)}
            className="absolute right-3 top-3 flex items-center justify-center rounded-full bg-white p-2 text-brand-500 hover:cursor-pointer"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full text-xl hover:bg-gray-50 dark:text-navy-900">
              {heart ? (
                <IoHeartOutline />
              ) : (
                <IoHeart className="text-brand-500" />
              )}
            </div>
          </button>
          {!road ? (
            <span className="absolute left-2 top-2 flex items-center justify-center rounded-xl bg-white/10  px-2 py-1 text-[14px] text-red-700 backdrop-blur-xl dark:bg-[#0b14374d] ">
              <MdWarningAmber className="h-[16px] w-[16px]" />{" "}
              <span className="">Not Allowed On The Road</span>
            </span>
          ) : (
            <></>
          )}
        </div>

        <div className="mb-3 flex items-center justify-between px-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col xl:items-start 3xl:flex-row 3xl:justify-between">
          <div className="mb-2">
            <p className="text-left text-lg font-bold text-navy-700 dark:text-white">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-gray-600 md:mt-2">
              {author}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between pl-1 md:flex-col md:items-start lg:flex-row lg:justify-between xl:flex-col 2xl:items-start 3xl:flex-row 3xl:items-center 3xl:justify-between">
          <div className="flex">
            <p className="mb-2 text-xl font-bold text-brand-500 dark:text-white">
              £ {price}
            </p>
          </div>
          <button
            className={`linear rounded-[20px] ${selectcss} px-4 py-2 text-base font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700 dark:${selectcss} dark:hover:bg-brand-300 dark:active:opacity-90`}
          >
            {selectBtn}{" "}
            <BsMinecartLoaded className="inline h-[16px] w-[16px]" />
          </button>
        </div>
      </div>
    </Card>
  );
};

export default NftCard;
