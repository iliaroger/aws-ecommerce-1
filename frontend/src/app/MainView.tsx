import { FunctionComponent } from "react";

interface MainViewProps {}

const MainView: FunctionComponent<MainViewProps> = () => {
  return (
    <div className="h-full flex flex-col gap-20 justify-center items-center text-black">
      <div className="w-1/2 flex flex-col items-center">
        <p className="text-black bold text-lg">Select a Next.js 13 feature:</p>
        <ul className="flex flex-row gap-4 mt-4">
          <li className="border rounded p-4 text-center">Routing</li>
          <li className="border rounded p-4 text-center">Dynamic Routes</li>
          <li className="border rounded p-4 text-center">
            Linking and Navigating
          </li>
          <li className="border rounded p-4 text-center">Dynamic Routes</li>
          <li className="border rounded p-4 text-center">Custom Errors</li>
        </ul>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <p className="text-black bold text-lg">Select a Golang feature:</p>
        <ul className="flex flex-row gap-4 mt-4">
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <p className="text-black bold text-lg">Select a AWS feature:</p>
        <ul className="flex flex-row gap-4 mt-4">
          <li>item1</li>
          <li>item1</li>
          <li>item1</li>
        </ul>
      </div>
    </div>
  );
};

export default MainView;
