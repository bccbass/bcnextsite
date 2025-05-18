import { PortableText } from "@portabletext/react";
// import { apiVersion, dataset, projectId } from "lib/sanity.api";
import ModalImgEmbed from "./ModalImgEmbed";
import urlBuilder from "@sanity/image-url";
import { createClient } from "next-sanity";
import { getImageDimensions } from "@sanity/asset-utils";



  // Custom link component that opens links in a new tab
  const ExternalLink = ({ value, children }) => {
    const { href } = value;
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  };

// Barebones lazy-loaded image component
const ImageComponent = ({ value, isInline }) => {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const client = createClient({
    projectId,
    dataset,
    // apiVersion,
    useCdn: false,
  });



  const { width, height } = getImageDimensions(value);
  return (
    <ModalImgEmbed>
      <img
        src={urlBuilder(client)
          .image(value.asset._ref)
          .width(isInline ? 100 : 1280)
          .fit("max")
          .auto("format")
          .url()}
        alt={value.alt || " "}
        loading="lazy"
        style={{
          maxHeight: "84vh",
          // Display alongside text if image appears inside a block text span
          display: isInline ? "inline-block" : "block",

          // Avoid jumping around with aspect-ratio CSS property
          aspectRatio: width / height,
        }}
      />
    </ModalImgEmbed>
  );
};



const components = {
  marks: {
    link: ExternalLink,
  },
  types: {
    image: ImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
  },
};

  const CustomPortableText = ({value}) => {
  return <PortableText value={value} components={components} />;
};

export default CustomPortableText;