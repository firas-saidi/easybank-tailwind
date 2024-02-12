import React from 'react';

const Article = ({ image, author, title, contents }) => {
  if (!title) return;

  return (
    <article className="my-4 overflow-hidden rounded-md shadow-lg">
      <div className="mx-auto aspect-video w-fit overflow-hidden">
        <img src={image} alt={title} />
      </div>
      <div className="p-6">
        <p className="mb-2 -mt-2 text-xs text-slate-500">By {author}</p>
        <h3 className="text-lg">{title}</h3>
        <p className="mt-2 text-sm text-slate-500">{contents}</p>
      </div>
    </article>
  );
};

export default Article;
