import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

function DefaultPageTemplate({ pageContext: { page } }) {
  return (
    <div className="divide-y divide-gray-200">
      <div className="pt-6 pb-8 space-y-2 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          {page.title}
        </h1>
        {page.subtitle && (
          <p className="text-lg leading-7 text-textcolor">{page.subtitle}</p>
        )}
      </div>
      <div className="pb-16 lg:pb-20">
        <div className="pt-10 pb-8 prose dark:prose-dark max-w-none">
          {page.content.markdownNode ? (
            <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
          ) : (
            <p>Hubo algún error con el contenido</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default DefaultPageTemplate;
