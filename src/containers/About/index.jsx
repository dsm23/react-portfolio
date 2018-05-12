import React from 'react';
import { Page } from '../../components';

const About = () => {
  return (
    <Page
      title="About Us"
      paragraphs={[
        'IMH Technologies offers fixed installations and portable instruments from major manufacturers around the globe to measure the properties of Electrical Power systems, both AC and DC. Also IMH can provide UK based consultancy services to assess load, harmonics, flicker and generally hunt down power quality issues when electrical systems do not conform to international norms. If required we can call upon the services of the internationally renowned "Electrotek systems" company of Tennessee whose engineers can provide an independent program of works to measure and improve power quality related issues in distributed electrical systems.',
      ]}
    />
  );
};

export default About;
