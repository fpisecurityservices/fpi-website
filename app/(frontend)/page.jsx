import { getPayload } from 'payload';
import config from '@payload-config';
import { draftMode } from 'next/headers';
import RenderBlocks from '@/components/blocks/RenderBlocks';
import HomePage from '@/screens/HomePage';
import { buildMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

async function getHome() {
  const payload = await getPayload({ config });
  const { isEnabled: draft } = await draftMode();
  const res = await payload.find({
    collection: 'pages',
    where: { slug: { equals: 'home' } },
    draft,
    limit: 1,
    overrideAccess: draft,
    depth: 2,
  });
  return res.docs?.[0] || null;
}

export async function generateMetadata() {
  const page = await getHome();
  if (page) return { title: page.meta?.title || page.title, description: page.meta?.description || undefined };
  return buildMetadata('/');
}

export default async function Page() {
  const page = await getHome();
  if (page) return <RenderBlocks blocks={page.layout || []} />;
  // Fallback to the built-in home until the CMS "home" page exists.
  return <HomePage />;
}
