import React from "react";
//import { Link } from "gatsby";

function IndexPage() {
  return (
    <div className="divide-y divide-gray-200 ">
      <div className="flex justify-center items-center md:items-end wt-bg rounded-lg mt-8 w-full">
        {/* <button
            type="button"
            class="bg-gray-700 text-white px-1 sm:px-6 py-2 rounded font-medium my-3 mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
          >
            <Link to="/blog">
              <h1 className="uppercase">Publicaciones</h1>
            </Link>
          </button>
          <button
            type="button"
            class="bg-gray-700 text-white px-1 sm:px-6 py-2 rounded font-medium my-3 mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
          >
            <Link to="/noticias">
              <h1 className="uppercase">Noticias</h1>
            </Link>
          </button> */}
        <div className="flex flex-col justify-center items-center content-center text-xl md:hidden">
          <h1 className="px-2 text-center text-gray-300 font-extrabold  bg-opacity-10 bg-gray-900 rounded-md">
            Wasting Time
          </h1>
          <p className="py-4 text-center text-purple-400 font-extrabold text-lg bg-opacity-10 bg-gray-900 rounded-md">
            Otra forma de perder el tiempo
          </p>
        </div>
      </div>
    </div>
  );
}

export default IndexPage;
