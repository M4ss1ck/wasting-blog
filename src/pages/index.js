import React from "react";

function IndexPage() {
  return (
    <div className="divide-y divide-gray-200 ">
      <div className="flex items-center justify-center w-full mt-8 rounded-lg md:items-end wt-bg">
        <div className="flex flex-col items-center content-center justify-center text-xl md:hidden">
          <h1 className="px-2 font-extrabold text-center rounded-md text-textcolor bg-bgcolor bg-opacity-10">
            Wasting Time
          </h1>
          <p className="py-4 text-lg font-extrabold text-center rounded-md text-hint bg-bgcolor bg-opacity-10">
            Otra forma de perder el tiempo
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
