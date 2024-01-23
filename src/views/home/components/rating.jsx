import { MdOutlineStarPurple500 } from "react-icons/md";
const Rating = () => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <div className="flex flex-row">
        <MdOutlineStarPurple500 className="text-warning-400 text-[20px]" />
        <MdOutlineStarPurple500 className="text-warning-400 text-[20px]" />
        <MdOutlineStarPurple500 className="text-warning-400 text-[20px]" />
        <MdOutlineStarPurple500 className="text-warning-400 text-[20px]" />
        <MdOutlineStarPurple500 className="text-warning-400 text-[20px]" />
      </div>
      <p className="text-gray-700 text-base font-semibold">5.0</p>
    </div>
  );
};

export default Rating;
