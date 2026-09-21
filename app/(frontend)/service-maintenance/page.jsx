import { buildMetadata } from '@/lib/seo';
import MaintenancePage from '@/screens/MaintenancePage';

export const metadata = buildMetadata('/service-maintenance');

export default function Page() {
  return <MaintenancePage />;
}
