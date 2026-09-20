import { buildMetadata } from '@/lib/seo';
import OfficersPage from '@/screens/OfficersPage';

export const metadata = buildMetadata('/security-officers');

export default function Page() {
  return <OfficersPage />;
}
