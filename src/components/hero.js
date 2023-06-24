import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import CtaButton from "../images/logo-button.png";
import HeroVideo from "../videos/kwd-video3.mp4";

const Hero = () => {
  const data = useStaticQuery(graphql`
    {
      heroimage: file(relativePath: { eq: "hero-image.png" }) {
        childImageSharp {
          gatsbyImageData(
            width: 5120
            placeholder: BLURRED
            formats: [AUTO, WEBP, AVIF]
          )
        }
      }
    }
  `);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flex flex-col xl:px-32 items-center text-center gap-6 py-20">
          <h1 className="font-display md:text-display-2xl text-display-lg">
            <span className="italic">Ihr Zuhause</span> als Wohlfühloase
          </h1>
          <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Wir bieten Ihnen individuelle Beratung, kreative Lösungen und nachhaltig gefertigte Möbel, die Ihnen lange Freude bereiten.
          </p>
        </div>
      </div>
      <div className="relative">
        <video autoPlay loop muted playsInline className="w-full object-cover h-full">
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <a href="/">
          <img
            src={CtaButton}
            alt="Get in touch"
            className="absolute xl:left-28 lg:left-[44%] md:left-[42%] left-[35%] -top-16"
          />
        </a>
      </div>
    </div>
  );
};

export default Hero;
