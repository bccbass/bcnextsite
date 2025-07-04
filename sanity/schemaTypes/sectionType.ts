{
  (" ");
}
import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

// type PdfFile = {
//   title: string;
//   url: string;
// };

export const sectionType = defineType({
  name: "section",
  title: "Section",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) =>
        rule.required().error(`Required to generate a page on the website`),
    }),

    defineField({
      name: "sortOrder",
      type: "number",
      description: "The order priority in which this post should be displayed",
      options: {
        list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        layout: "radio",
      },
    }),

    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),

    {
      name: "videos",
      title: "Videos",
      description: "Media hosted on Cloudinary/YouTube",
      type: "array",
      of: [
        defineField({
          name: "category",
          title: "Category",
          type: "object",
          fields: [
            {
              name: "category",
              title: "Category Title",
              type: "string",
            },

            {
              name: "videos",
              title: "videos",
              description: "Links to cloudinary videos",
              type: "array",
              of: [
                defineField({
                  name: "video",
                  title: "Video",
                  type: "object",
                  fields: [
                    {
                      name: "title",
                      title: "Video Title",
                      type: "string",
                    },
                    {
                      name: "artist",
                      title: "Artist",
                      type: "string",
                    },
                    {
                      name: "role",
                      title: "Role",
                      type: "string",
                    },
                    {
                      name: "videoThumbnail",
                      title: "Video Thumbnail",
                      type: "image",
                    },
                    { name: "url", title: "URL", type: "url", description: "URL for Cloudinary resource" },
                    { name: "youtubeId", title: "YouTube ID", type: "string", description: "ID for YouTube video - if present this will over ride cloudinary resource " },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    },

    defineField({
      name: "description",
      description: "A brief description of the project (1-2 sentences)",
            type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    }),
    defineField({
      name: "projectWebsite",
      description: "Projects External Website URL",
      title: "Project Website",
      type: "url",
    }),
    defineField({
      name: "body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    }),
    defineField({
      name: "displayBodySecondary",
      description: "Toggle to display the secondary body.",
      title: "Display secondary body",
      initialValue: false,
      type: "boolean",
    }),
    defineField({
      name: "bodySecondary",
      title: "Secondary Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
        },
      ],
    }),
    {
      name: "mediaLinks",
      title: "YouTube Videos",
      description: "Media IDs for YouTube videos eg: 03NX_EjGijM",
      type: "array",
      of: [
        defineField({
          name: "media",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Video Title",
              type: "string",
            },
            {
              name: "URL",
              title: "YouTube ID",
              type: "string",
            },

            {
              name: "description",
              title: "Optional Description",
              type: "string",
            },
          ],
        }),
      ],
    },
    {
      name: "pdfMedia",
      title: "PDF Media",
      // description: "",
      type: "array",
      of: [
        defineField({
          name: "pdfMedia",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Document Title",
              type: "string",
            },
            {
              name: "document",
              title: "PDF Document",
              type: "file",
            },
          ],
        }),
      ],
    },
    {
      name: "albums",
      title: "Albums",
      description: "Album pop-out with streaming links",
      type: "array",
      of: [
        defineField({
          name: "album",
          type: "object",
          fields: [
            {
              name: "title",
              title: "Album Title",
              type: "string",
            },
            {
              name: "artist",
              title: "Artist",
              type: "string",
            },
            {
              name: "image",
              title: "Album Image",
              type: "image",
            },
            {
              name: "purchaseLink",
              title: "Purchase Link",
              type: "url",
              description: "Link to purchase the album",
            },
            {
              name: "vinyl",
              title: "Vinyl Available",
              type: "boolean",
              description: "Album is available on vinyl",
              options: {
                layout: "checkbox",
                default: false,
              },
            },
            {
              name: "links",
              title: "Album Links",
              description: "Links to streaming platforms",
              type: "array",
              of: [
                defineField({
                  name: "platform",
                  type: "object",
                  fields: [
                    {
                      name: "platform",
                      title: "Platform",
                      type: "string",
                      options: {
                        list: [
                          { title: "Spotify", value: "Spotify" },
                          { title: "Apple Music", value: "Apple Music" },
                          { title: "YouTube", value: "YouTube" },
                          { title: "Soundcloud", value: "Soundcloud" },
                          { title: "Bandcamp", value: "Bandcamp" },
                          { title: "Amazon Music", value: "Amazon Music" },
                          { title: "Tidal", value: "Tidal" },
                          { title: "Deezer", value: "Deezer" },
                          { title: "Pandora", value: "Pandora" },
                        ],
                      },
                    },
                    { name: "url", title: "URL", type: "url" },
                  ],
                }),
              ],
            },
          ],
        }),
      ],
    },
  ],
  preview: {
    select: {
      title: "title",

      media: "mainImage",
    },
  },
});
