// app/sitemap.xml/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://benjamincampbell.com';

  const staticPages = [
    '',
    'about',
    'discography',
    'process',
  ];

  const urls = staticPages.map(
    (path) => `
      <url>
        <loc>${baseUrl}/${path}</loc>
      </url>`
  );

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
