import { getPayload } from 'payload';
import config from '@payload-config';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import RenderBlocks from '@/components/blocks/RenderBlocks';

export const dynamic = 'force-dynamic';

async function getPage(slugPath) {
  const payload = await getPayload({ config });
  const { isEnabled: draft } = await draftMode();
  const result = await payload.find({
    collection: 'pages',
    where: { slug: { equals: slugPath } },
    draft,
    limit: 1,
    overrideAccess: draft,
    depth: 2,
  });
  return result.docs?.[0] || null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const page = await getPage(slug.join('/'));
  if (!page) return {};
  return {
    title: page.meta?.title || page.title,
    description: page.meta?.description || undefined,
  };
}

export default async function CmsPage({ params }) {
  const { slug } = await params;
  const page = await getPage(slug.join('/'));
  if (!page) notFound();
  return <RenderBlocks blocks={page.layout || []} />;
}
