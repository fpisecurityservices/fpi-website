import { buildMetadata } from '@/lib/seo';
import ConstructionPage from '@/screens/industries/ConstructionPage';

export const metadata = buildMetadata('/industries/construction-site-security');

export default function Page() {
  return <ConstructionPage />;
}
