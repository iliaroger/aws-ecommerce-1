import { nextData } from "@/utils/itemData";
import Link from "next/link";
import { FunctionComponent } from "react";

interface MainViewProps {}

const MainView: FunctionComponent<MainViewProps> = () => {
  return (
    <div className="h-full flex flex-col gap-20 justify-start items-center text-black p-10">
      <div className="w-3/4 flex flex-col items-center">
        <p className="text-black bold text-lg">Select a Next.js 13 feature:</p>
        <ul className="flex flex-row flex-wrap w-full justify-around gap-y-4 gap-x-8 mt-4">
          {nextData.map((element, index) => {
            return (
              <Link key={element.name + index} href={element.path}>
                <li className="border border-gray-100 rounded-lg p-8 text-center flex flex-row items-middle shadow-sm hover:border-gray-300 hover:cursor-pointer select-none">
                  <p className="self-center text-sm">{element.name}</p>
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <p className="text-black bold text-lg">Select a Golang feature:</p>
        <ul className="flex flex-row gap-4 mt-4"></ul>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <p className="text-black bold text-lg">Select a AWS feature:</p>
        <ul className="flex flex-row gap-4 mt-4"></ul>
      </div>
    </div>
  );
};

export default MainView;
