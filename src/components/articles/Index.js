import React from 'react';
import { articles } from '../../data';
import Article from './Article';

const Articles = () => {
  return (
    <section className="m-4 py-4 lg:px-[10%]">
      <h2 className="mx-auto w-fit text-2xl  lg:my-8 lg:mx-0 lg:text-4xl">
        Latest Articles
      </h2>
      <section className="md:flex md:gap-4">
        {articles.map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </section>
    </section>
  );
};

export default Articles;
