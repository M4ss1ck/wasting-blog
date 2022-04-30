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
        className="flex flex-col min-h-screen bg-bgcolor text-textcolor"
        id="top"
      >
        <Header />
        {barra ? <ReadingProgress target={target} /> : null}
        <div className="flex-grow w-full max-w-3xl px-4 mx-auto sm:px-6 lg:max-w-5xl">
          <main className="flex-grow mb-8" ref={target}>
            {children}
          </main>
          <div className="fixed z-50 my-auto ml-12 mr-0 bottom-6 right-1 md:right-5 group">
            <a href="#top" className="flex flex-row">
              <span className="hidden px-4 border rounded-full group-hover:inline-flex bg-button text-buttontext border-hint">
                Subir
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 group-hover:hidden"
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
