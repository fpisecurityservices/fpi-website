import { buildMetadata } from '@/lib/seo';
import LocationsPage from '@/screens/LocationsPage';

export const metadata = buildMetadata('/locations');

export default function Page() {
  return <LocationsPage />;
}
