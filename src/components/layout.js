import React from "react";

import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";
import ReadingProgress from "./readingProgress";

function Layout({ children, barra, pageContext: { page } }) {
  const target = React.createRef();
  return (
    <React.Fragment>
      <Seo {...page} />
      <div
        className="flex flex-col min-h-screen bg-gray-200 dark:text-white dark:bg-black"
        id="top"
      >
        <Header />
        {barra ? <ReadingProgress target={target} /> : null}
        <div className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-5xl w-full">
          <main className="flex-grow mb-8" ref={target}>
            {children}
          </main>
          <div className="fixed bottom-6 right-1 md:right-5 ml-12 my-auto mr-0 z-50 group">
            <a href="#top" className="flex-row flex">
              <span className="hidden group-hover:inline-flex px-4 bg-white text-primario rounded-full border border-primario dark:bg-black dark:text-white">
                Subir
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 group-hover:hidden"
                viewBox="0 0 20 20"
                fill="#fff"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout;
