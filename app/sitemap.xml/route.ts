// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';
import { getSlugs } from '@/lib/fetch';
export async function GET() {
  const baseUrl = 'https://benjamincampbell.com';

  const blogSlugs = await getSlugs('post')
  const projectSlugs = await getSlugs('project')
  const sectionSlugs = await getSlugs('section')
console.log('blogslugs', blogSlugs[0]._updatedAt.split('T')[0])
  const staticPages = [
    '',
    'about',
    'discography',
    'process',
  ];


  const urls = [
    ...staticPages.map(
    (path) => `
      <url>
        <loc>${baseUrl}/${path}</loc>
      </url>`
  ),
      ...blogSlugs.map(
    (path) => `
      <url>
        <loc>${baseUrl}/process/${path.slug.current}</loc>
        <lastmod>${path._updatedAt.split('T')[0]}</lastmod>
      </url>`
  ),
      ...projectSlugs.map(
    (path) => `
      <url>
        <loc>${baseUrl}/projects/${path.slug.current}</loc>
        <lastmod>${path._updatedAt.split('T')[0]}</lastmod>
      </url>`
  ),
      ...sectionSlugs.map(
    (path) => `
      <url>
        <loc>${baseUrl}/projects/${path.slug.current}</loc>
        <lastmod>${path._updatedAt.split('T')[0]}</lastmod>
      </url>`
  ),
];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
