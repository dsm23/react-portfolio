import React from 'react';
import { Page } from '../../components';

const Home = () => {
  return (
    <Page
      title="Welcome to IMH Technologies Ltd."
      paragraphs={[
        'Formed in 1993, IMH Technologies Ltd has been the exclusive distributor of the Dranetz range of power quality monitors. Shortly after, we added the Dent Instruments range of energy loggers. In addition, IMH represent the interests of Electrotek who are part of the GPT operations that also owns Dranetz. They are a specialist power quality analysis software company . More recently, IMH have been assisting in the new, low-cost PQ Relay device from Power Standards Laboratory of California and we have been involved in the SEMI47 & IEC 61000-4-34 testing instruments specifically developed by PSL.',
        'Throughout, IMH Technologies has offered an independent power quality consultancy operation that has been used by the major utilites and customers throughout the United Kingdom and offshore.',
        'IMH offers full repair and service capability for the major products and, where possible, we try to source the components to keep even quite ancient instruments in service. Calibration to National Standards is offered at competitive prices. Ask us about our GSM/GPRS and now 3G Mobile solutions too.',
      ]}
    />
  );
};

export default Home;
