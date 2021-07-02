import React from "react";
import { Link } from "gatsby";

function IndexPage() {
  return (
    <div className="divide-y divide-gray-200 ">
      <div className="flex justify-center items-end wt-bg">
        <button
          type="button"
          class="bg-gray-700 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
        >
          <Link to="/blog">
            <h1 className="uppercase">Publicaciones</h1>
          </Link>
        </button>
        <button
          type="button"
          class="bg-gray-700 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-gray-800 transition duration-200 each-in-out"
        >
          <Link to="/noticias">
            <h1 className="uppercase">Noticias</h1>
          </Link>
        </button>
      </div>
    </div>
  );
}

export default IndexPage;
