import {
  PillIcon,
  ShieldCheckIcon,
  TruckTrailerIcon,
  SealPercentIcon,
} from "@phosphor-icons/react";
const Services = ({ darkmode, setdarkmode }: any) => {
  return (
    <div className="bg-white dark:bg-gray-900 w-full flex dark:border-t dark:border-gray-500 flex-col items-center gap-5 py-8">
      <div className="w-full gap-5 md:w-[70%] lg:w-1/2 flex flex-col md:px-5 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center">
          <PillIcon size={28} color="green" />
          <h1 className="font-semibold text-lg text-green-700">
            Rare/Unavailable Drugs
          </h1>
          <p className="text-sm">Find rare and unavailable drugs</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <ShieldCheckIcon size={28} color="green" />
          <h1 className="font-semibold text-lg text-green-700">
            Rare/Unavailable Drugs
          </h1>
          <p className="text-sm">Find rare and unavailable drugs</p>
        </div>
      </div>

      <div className="w-full gap-5 md:w-[70%] lg:w-1/2 flex flex-col md:px-5 md:flex-row md:justify-between">
        <div className="flex flex-col justify-center items-center">
          <TruckTrailerIcon size={28} color="green" />
          <h1 className="font-semibold text-lg text-green-700">
            Rare/Unavailable Drugs
          </h1>
          <p className="text-sm">Find rare and unavailable drugs</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <SealPercentIcon size={28} color="green" />
          <h1 className="font-semibold text-lg text-green-700">
            Rare/Unavailable Drugs
          </h1>
          <p className="text-sm">Find rare and unavailable drugs</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
