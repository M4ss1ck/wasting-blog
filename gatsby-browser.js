import React from "react";
import { MDXProvider } from "@mdx-js/react";

import "./src/styles/index.css";
import Layout from "./src/components/layout";

// const MyH1 = (props) => (
//   <h1 className="text-gray-800 dark:text-gray-600" {...props} />
// );
// const MyParagraph = (props) => (
//   <p className="text-gray-800 dark:opacity-30 dark:text-gray-600" {...props} />
// );
// const MyStrong = (props) => (
//   <strong className="text-black dark:text-gray-400" {...props} />
// );
// const MyLink = (props) => (
//   <a
//     className="text-purple-500 hover:text-purple-800 no-underline"
//     {...props}
//   />
// );

// const components = {
//   h1: MyH1,
//   p: MyParagraph,
//   strong: MyStrong,
// };

const wrapPageElement = ({ element, props }) => (
  <Layout {...props} barra>
    {element}
  </Layout>
);

const wrapRootElement = ({ element }) => (
  <MDXProvider
  //components={components}
  >
    {element}
  </MDXProvider>
);

export { wrapPageElement, wrapRootElement };
