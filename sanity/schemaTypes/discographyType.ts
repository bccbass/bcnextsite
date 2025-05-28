import { DocumentTextIcon } from "@sanity/icons";
import {  defineField, defineType } from "sanity";



export const discographyType = defineType({
  name: "discography",
  title: "Discography",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
    }),
    // defineField({
    //   name: "slug",
    //   type: "slug",
    //   options: {
    //     source: "title",
    //   },
    //   validation: (rule) =>
    //     rule.required().error(`Required to generate a page on the website`),
    // }),


   

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
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "role",
              title: "Role",
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
 
});

