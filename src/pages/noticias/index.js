import React from "react";
import { graphql, Link } from "gatsby";

function IndexPage({ data: { allGraphCmsNew } }) {
  return (
    <div className="divide-y divide-gray-200">
      <div className="flex flex-wrap">
        <div className="w-full">
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
                            className="text-gray-600  hover:text-purple-600"
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
