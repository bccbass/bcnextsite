/** @format */

import { defineType, defineField } from "sanity";

export default defineType({
	name: "website",
	title: "Website Settings",
	type: "document",
	fields: [
		{
			name: "heroImage",
			title: "Hero Banner Image",
			type: "image",
			options: { hotspot: true },
		},
		{
			name: "heroTagline",
			title: "Hero Tagline",
			type: "string",
		},
		{
			name: "briefBiography",
			title: "Brief Biography",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "biography",
			title: "Biography",
			type: "array",
			of: [{ type: "block" }],
		},
		{
			name: "socialLinks",
			title: "Social Media Links",
			type: "array",
			of: [
				defineField({
					name: "social",
					type: "object",
					fields: [
						{
							name: "platform",
							title: "Platform",
							type: "string",
							options: {
								list: [
									{ title: "Twitter", value: "twitter" },
									{ title: "Instagram", value: "instagram" },
									{ title: "Bandcamp", value: "bandcamp" },
									{ title: "Soundcloud", value: "soundcloud" },
									{ title: "Vimeo", value: "vimeo" },
									{ title: "Facebook", value: "facebook" },
									{ title: "LinkedIn", value: "linkedin" },
									{ title: "GitHub", value: "github" },
									{ title: "YouTube", value: "youtube" },
								],
							},
						},
						{
							name: "url",
							title: "URL",
							type: "url",
						},
					],
				}),
			],
		},
	],
});
