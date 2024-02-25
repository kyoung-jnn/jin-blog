import generateRSS from '@/scripts/rss';
import generateSitemap from '@/scripts/sitemap';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { secret } = req.query;
  if (secret !== process.env.TOKEN_FOR_REVALIDATE) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  try {
    const sitemap = await generateSitemap();

    res.setHeader('Content-Type', 'application/xml');
    res.write(sitemap);

    const rssFeed = await generateRSS();

    res.setHeader('Content-Type', 'application/rss+xml');
    res.write(rssFeed.rss2());

    res.end();
  } catch (err) {
    return res.status(500).send('Error SEO work');
  }
}
