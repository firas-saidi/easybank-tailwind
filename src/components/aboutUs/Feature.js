import React from 'react';

const Feature = ({ image, title, description }) => {
  if (!title) return;

  return (
    <article className="my-8">
      <div className="mx-auto w-fit md:mx-0">
        <img src={image} alt={title} />
      </div>
      <h3 className="mx-auto mt-4 mb-1 w-fit text-center text-2xl md:mx-0 md:text-left">
        {title}
      </h3>
      <p className="mx-auto w-fit text-center text-slate-600 md:mx-0 md:text-left">
        {description}
      </p>
    </article>
  );
};

export default Feature;
