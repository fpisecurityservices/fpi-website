import { LOCATIONS_DATA } from '@/data/locations';
import { buildMetadata } from '@/lib/seo';
import LocationDetailPage from '@/screens/LocationDetailPage';

const OG_IMAGE = 'https://www.fpisecurity.com/assets/logo-transparent.png';

export function generateStaticParams() {
  return LOCATIONS_DATA.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const known = buildMetadata(`/locations/${slug}`);
  if (known.title) return known;
  const loc = LOCATIONS_DATA.find((l) => l.slug === slug);
  if (!loc) return {};
  const canonical = `https://www.fpisecurity.com/locations/${slug}`;
  return {
    title: loc.metaTitle,
    description: loc.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: loc.metaTitle,
      description: loc.metaDescription,
      url: canonical,
      type: 'website',
      images: [OG_IMAGE],
    },
  };
}

export default function Page() {
  return <LocationDetailPage />;
}
