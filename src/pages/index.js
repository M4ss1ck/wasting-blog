import React from "react";
import { graphql, Link } from "gatsby";

function IndexPage({ data: { allGraphCmsPost, allGraphCmsNew } }) {
  return (
    <div className="divide-y divide-gray-200">
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
          {/* posts */}
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Publicaciones
            </h1>
            <p className="text-lg leading-7 text-gray-500">
              Últimas publicaciones en el blog
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {allGraphCmsPost.nodes.map((post) => {
              return (
                <li key={post.id} className="py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Publicado</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <time dateTime={post.date}>{post.date}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                          <Link
                            to={`/posts/${post.slug}`}
                            className="text-gray-900"
                          >
                            {post.title}
                          </Link>
                        </h2>
                        {post.excerpt && (
                          <div className="prose max-w-none text-gray-500">
                            {post.excerpt}
                          </div>
                        )}
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          to={`/posts/${post.slug}`}
                          className="text-purple-500 hover:text-purple-600"
                          aria-label={`Read "${post.title}"`}
                        >
                          Leer más &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="w-full sm:w-1/2">
          {/* noticias */}
          <div className="pt-6 pb-8 space-y-2 md:space-y-5">
            <h1 className="text-3xl leading-9 font-extrabold text-gray-900 tracking-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Noticias
            </h1>
            <p className="text-lg leading-7 text-gray-500">Últimas noticias</p>
          </div>
          <ul className="divide-y divide-gray-200">
            {allGraphCmsNew.nodes.map((noticia) => {
              return (
                <li key={noticia.id} className="py-12">
                  <article className="space-y-2 xl:grid xl:grid-cols-4 xl:space-y-0 xl:items-baseline">
                    <dl>
                      <dt className="sr-only">Publicado</dt>
                      <dd className="text-base leading-6 font-medium text-gray-500">
                        <time dateTime={noticia.date}>{noticia.date}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <h2 className="text-2xl leading-8 font-bold tracking-tight">
                          <Link
                            to={`/noticias/${noticia.slug}`}
                            className="text-gray-900"
                          >
                            {noticia.title}
                          </Link>
                        </h2>
                        {noticia.excerpt && (
                          <div className="prose max-w-none text-gray-500">
                            {noticia.excerpt}
                          </div>
                        )}
                      </div>
                      <div className="text-base leading-6 font-medium">
                        <Link
                          to={`/noticias/${noticia.slug}`}
                          className="text-purple-500 hover:text-purple-600"
                          aria-label={`Read "${noticia.title}"`}
                        >
                          Leer más &rarr;
                        </Link>
                      </div>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export const indexPageQuery = graphql`
  {
    allGraphCmsPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        date: formattedDate
        excerpt
        slug
        title
      }
    }
    allGraphCmsNew(sort: { fields: date, order: DESC }) {
      nodes {
        id
        date: formattedDate
        excerpt
        slug
        title
      }
    }
  }
`;

export default IndexPage;
