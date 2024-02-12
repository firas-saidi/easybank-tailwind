import React from 'react';
import Features from './Features';

const AboutUS = () => {
  return (
    <section className="bg-slate-100 lg:flex lg:h-screen lg:items-center">
      <section className="  py-8 px-4 lg:mx-auto lg:px-[10%]">
        <h2 className="mx-auto my-4 w-fit text-center text-3xl lg:mx-0 lg:text-5xl">
          Why choose EasyBank?
        </h2>
        <p className="mx-auto mb-12 w-fit text-center text-slate-600 lg:mx-0 lg:max-w-[650px] lg:text-left lg:text-lg">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <Features />
      </section>
    </section>
  );
};

export default AboutUS;
