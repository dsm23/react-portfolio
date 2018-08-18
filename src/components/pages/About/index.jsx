import React from "react";
import { Page } from "../../../components";

const About = () => {
  return (
    <Page
      title="About"
      paragraphs={[
        "My experience pursuing a Physics degree gave me various opportunities to develop my ability to solve problems. What I have learnt most from those opportunities is to take advantage of readily available online resources which I find is a suitable approach to programming. On the web, glossaries of all commands and key words are but a click away. The challenge is to use them correctly and with correct intent. Also, during my time at university I have further developed competence in self-motivation and time management.",
        "During university I was taught the programming language Python (specifically in relation to pylab). I have taught myself HTML/CSS and Javascript along with its jQuery resource with help from online resources Codecademy and freeCodeCamp. Those resources also gave me a basic demonstration of PHP, Ruby and AngularJS. But my expereience at 3dprintingindustry.com gave me a very good understanding of Wordpress.",
        "I link my Curriculum Vitae for your consideration. Designed by Freepik"
      ]}
      titleVariant="display2"
      pageComponent="display2"
    />
  );
};

export default About;
