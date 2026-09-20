import { buildMetadata } from '@/lib/seo';
import CommercialOfficePage from '@/screens/industries/CommercialOfficePage';

export const metadata = buildMetadata('/industries/commercial-office-building-security');

export default function Page() {
  return <CommercialOfficePage />;
}
