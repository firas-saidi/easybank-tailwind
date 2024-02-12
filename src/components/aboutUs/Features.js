import React from 'react';
import { features } from '../../data';
import Feature from './Feature';

const Features = () => {
  return (
    <section className="md:flex md:gap-4 lg:gap-8">
      {features.map((feature) => (
        <Feature key={feature.id} {...feature} />
      ))}
    </section>
  );
};

export default Features;
