import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";

function NewTemplate({
  data: { authorImage, coverImage },
  pageContext: { nextNew, page, previousNew },
}) {
  return (
    <article>
      <header className="pt-6 lg:pb-10">
        <div className="space-y-1 text-center">
          <dl className="space-y-10">
            <div>
              <dt className="sr-only">Publicado</dt>
              <dd className="text-base leading-6 font-medium text-gray-500">
                <time dateTime={page.date}>{page.date}</time>
              </dd>
            </div>
          </dl>
          <div>
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 dark:text-gray-600 tracking-tight sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
              {page.title}
            </h1>
          </div>
        </div>
      </header>
      <div
        className="divide-y lg:divide-y-0 divide-gray-200 lg:grid lg:grid-cols-4 lg:col-gap-6 pb-16 lg:pb-20"
        style={{ gridTemplateRows: "auto 1fr" }}
      >
        <dl className="pt-6 pb-10 lg:pt-11 lg:border-b lg:border-gray-200">
          <dt className="sr-only">Autor</dt>
          <dd>
            <ul className="flex justify-center lg:block space-x-8 sm:space-x-12 lg:space-x-0 lg:space-y-8">
              <li className="flex space-x-2">
                {authorImage && (
                  <GatsbyImage
                    image={
                      authorImage.localFile.childImageSharp.gatsbyImageData
                    }
                    className="w-10 h-10 rounded-full"
                    fadeIn={false}
                  />
                )}
                <dl className="flex-1 text-sm font-medium leading-5">
                  {page.authors.forEach((autor) => {
                    return (
                      <>
                        <dt className="sr-only">Nombre</dt>
                        <dd className="text-gray-900 dark:text-gray-600">
                          {autor.name}
                        </dd>
                        {autor.title && (
                          <React.Fragment>
                            <dt className="sr-only">Título</dt>
                            <dd className="text-gray-500">{autor.title}</dd>
                          </React.Fragment>
                        )}
                      </>
                    );
                  })}
                </dl>
              </li>
            </ul>
          </dd>
        </dl>
        <div className="divide-y divide-gray-200 lg:pb-0 lg:col-span-3 lg:row-span-2 mx-4">
          {coverImage && (
            <GatsbyImage
              image={coverImage.localFile.childImageSharp.gatsbyImageData}
              className="mb-8 rounded"
              fadeIn={false}
            />
          )}
          <div className="prose dark:prose-dark max-w-none pt-10 pb-8">
            <MDXRenderer>{page.content.markdownNode.childMdx.body}</MDXRenderer>
          </div>
        </div>
        <footer className="text-sm font-medium leading-5 divide-y divide-gray-200 lg:col-start-1 lg:row-start-2 mx-2">
          {(nextNew || previousNew) && (
            <div className="space-y-8 py-8">
              {nextNew && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Siguiente
                  </h2>
                  <div className="text-purple-400 hover:text-purple-700">
                    <Link to={`/noticias/${nextNew.slug}`}>
                      {nextNew.title}
                    </Link>
                  </div>
                </div>
              )}
              {previousNew && (
                <div>
                  <h2 className="text-xs tracking-wide uppercase text-gray-500">
                    Anterior
                  </h2>
                  <div className="text-purple-400 hover:text-purple-700">
                    <Link to={`/noticias/${previousNew.slug}`}>
                      {previousNew.title}
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-8">
            <Link to="/" className="text-purple-400 hover:text-purple-700">
              &larr; Regresar{" "}
              <span style={{ textDecoration: "line-through" }}>al futuro</span>{" "}
              a la página principal
            </Link>
          </div>
        </footer>
      </div>
    </article>
  );
}

export const pageQuery = graphql`
  query NewQuery($id: String!) {
    authorImage: graphCmsAsset(
      authorAvatar: {
        elemMatch: { posts: { elemMatch: { id: { in: [$id] } } } }
      }
    ) {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
    }
    coverImage: graphCmsAsset(
      coverImagePost: { elemMatch: { id: { eq: $id } } }
    ) {
      id
      localFile {
        childImageSharp {
          gatsbyImageData(width: 600, layout: CONSTRAINED)
        }
      }
    }
  }
`;

export default NewTemplate;
