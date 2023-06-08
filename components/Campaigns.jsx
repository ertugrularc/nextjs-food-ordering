import Image from "next/image";
import Title from "./UI/Title";
import { MdShoppingCart } from "react-icons/md";

const CampaigItem = () => {
  return (
    <div className="bg-secondary flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4 ">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-[''] border-[5px] border-primary rounded-full overflow-hidden  ">
        <Image
          src="/images/hamburger1.png"
          className="hover:scale-110 transition-all"
          alt=""
          layout="fill"
          priority
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Tasty Thursdays</Title>

        <div className="font-dancing">
          <span className="text-[40px] ">20%</span>
          <span>OFF</span>
        </div>
        <button className="btn-primary flex gap-x-2 items-center">
          Order Now
          <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};

export const Campaigns = () => {
  return (
    <div className="flex justify-between container mx-auto py-20 gap-5 flex-wrap">
      <CampaigItem />
      <CampaigItem />
    </div>
  );
};
