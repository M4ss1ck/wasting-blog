import React, { useEffect, useState } from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { globalHistory, useLocation } from "@reach/router";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import cx from "classnames";

import Transition from "./transition";

function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const location = useLocation();
  const { pages, logo3, logo2, logo1 } = useStaticQuery(graphql`
    {
      pages: allGraphCmsPage {
        nodes {
          id
          slug
          title
        }
      }
      logo3: file(relativePath: { eq: "logo3.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      logo2: file(relativePath: { eq: "logo2.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
      logo1: file(relativePath: { eq: "logo1.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `);

  useEffect(
    () =>
      globalHistory.listen(({ action }) => {
        if (action === "PUSH") setMobileNavOpen(false);
      }),
    [setMobileNavOpen]
  );

  const toggleMobileNavOpen = () => setMobileNavOpen((open) => !open);

  const image3 = getImage(logo3);
  const image2 = getImage(logo2);
  const image1 = getImage(logo1);

  return (
    <header className="sticky top-0 z-30 w-full px-4 py-0 bg-gradient-to-r from-white via-transparent to-white dark:from-black dark:via-gray-800 dark:to-black dark:text-white">
      <nav className="relative flex flex-wrap items-center justify-between sm:h-14 md:h-12 lg:justify-center">
        <div className="flex items-center flex-grow flex-shrink-0 sm:h-14 md:h-12">
          <div className="flex items-center justify-between w-full">
            <div
              className="justify-center h-full align-middle"
              //style={{ height: "10vh" }}
            >
              <Link to="/" aria-label="Wasting Time Blog">
                <div className="items-center hidden h-10 logoh sm:inline-flex">
                  <GatsbyImage
                    image={image3}
                    alt="logo"
                    className="h-10 w-28"
                    // style={{
                    //   maxHeight: "100%",
                    // }}
                    // imgStyle={{
                    //   objectFit: "contain",
                    //   objectPosition: "center left",
                    // }}
                  />
                </div>
                <div className="inline-flex items-center max-h-full sm:hidden">
                  <GatsbyImage
                    image={image1}
                    alt="logo"
                    className="w-10 h-10"
                    // style={{
                    //   maxHeight: "100%",
                    // }}
                    // imgStyle={{
                    //   objectFit: "contain",
                    //   objectPosition: "center left",
                    // }}
                  />
                </div>
                {/* <span className="text-lg">Wasting Time Blog</span> */}
              </Link>
            </div>
            <div className="flex items-center -mr-2 md:hidden">
              <button
                onClick={() => toggleMobileNavOpen()}
                type="button"
                className="inline-flex items-center justify-center p-2 transition duration-150 ease-in-out rounded-md text-textcolor hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                id="main-menu"
                aria-label="Main menu"
                aria-haspopup="true"
              >
                <svg
                  className="w-6 h-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden space-x-8 md:flex md:ml-10 md:pr-4">
          <Link
            to={`/blog`}
            className={cx(
              "inline-flex items-center px-1 pt-1 pb-2 border-b-4 text-lg font-medium leading-5 focus:outline-none transition duration-150 ease-in-out",
              {
                "border-purple-500 text-gray-900 dark:text-purple-500 focus:border-purple-600":
                  location.pathname.startsWith(`/blog`),
                "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                  !location.pathname.startsWith(`/blog`),
              }
            )}
          >
            Publicaciones
          </Link>
          {pages.nodes.map((page) => {
            const isActive = location.pathname.startsWith(`/${page.slug}`);
            return (
              <Link
                key={page.id}
                to={`/${page.slug}`}
                className={cx(
                  "inline-flex items-center px-1 pt-1 pb-2 border-b-4 text-lg font-medium leading-5 focus:outline-none transition duration-150 ease-in-out",
                  {
                    "border-purple-500 text-gray-900 dark:text-purple-500 focus:border-purple-600":
                      isActive,
                    "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                      !isActive,
                  }
                )}
              >
                {page.title}
              </Link>
            );
          })}
        </div>
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div className="mx-4 dark-button">
              <input
                aria-label="Toggle dark mode"
                type="checkbox"
                id="toggle"
                onChange={(e) =>
                  toggleTheme(e.target.checked ? "dark" : "light")
                }
                checked={theme === "dark"}
              />
            </div>
          )}
        </ThemeToggler>
      </nav>
      <Transition
        show={mobileNavOpen}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div className="absolute inset-x-0 top-0 z-50 py-2 -mx-2 transition origin-top-right transform md:hidden md:z-10">
          <div className="rounded-lg shadow-md">
            <div
              className="overflow-hidden bg-white rounded-lg shadow-xs dark:bg-black"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="main-menu"
            >
              <div className="flex items-center justify-between px-2 pt-8">
                <div className="w-custom">
                  <Link to="/">
                    <GatsbyImage
                      image={image2}
                      alt="logo"
                      className="h-10 w-28"
                      // style={{
                      //   maxHeight: "10vh",
                      // }}
                      // imgStyle={{
                      //   objectFit: "contain",
                      //   objectPosition: "center left",
                      // }}
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <button
                    onClick={() => toggleMobileNavOpen()}
                    type="button"
                    className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 mt-1 space-y-1">
                {/* <Link
                  to={`/noticias`}
                  className={cx(
                    "block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out",
                    {
                      "border-purple-500 text-gray-900 dark:text-purple-500 focus:border-purple-600":
                        location.pathname.startsWith(`/noticias`),
                      "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                        !location.pathname.startsWith(`/noticias`),
                    }
                  )}
                  role="menuitem"
                >
                  Noticias
                </Link> */}
                <Link
                  to={`/blog`}
                  className={cx(
                    "block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out",
                    {
                      "border-purple-500 text-gray-900 dark:text-purple-500 focus:border-purple-600":
                        location.pathname.startsWith(`/blog`),
                      "border-transparent text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:border-gray-300 focus:text-gray-600 focus:border-grey-600":
                        !location.pathname.startsWith(`/blog`),
                    }
                  )}
                  role="menuitem"
                >
                  Publicaciones
                </Link>
                {pages.nodes.map((page) => {
                  const isActive = location.pathname.startsWith(
                    `/${page.slug}`
                  );

                  return (
                    <Link
                      key={page.id}
                      to={`/${page.slug}`}
                      className={cx(
                        "block pl-3 pr-4 py-2 border-l-4 font-medium focus:outline-none transition duration-150 ease-in-out",
                        {
                          "border-purple-500 text-purple-500 bg-purple-50 dark:text-purple-500 focus:text-purple-600 focus:bg-purple-100 focus:border-purple-600":
                            isActive,
                          "border-transparent text-gray-500 hover:text-gray-600 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-600 focus:bg-gray-50 dark:hover:text-gray-300 focus:border-gray-300":
                            !isActive,
                        }
                      )}
                      role="menuitem"
                    >
                      {page.title}
                    </Link>
                  );
                })}
                {/* <BotonModoOscuro
                  enabled={theme === "dark"}
                  setEnabled={() => setTheme(theme === "dark" ? "light" : "dark")}
                /> */}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </header>
  );
}

export default Header;
