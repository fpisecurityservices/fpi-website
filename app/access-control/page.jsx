import { buildMetadata } from '@/lib/seo';
import AccessControlPage from '@/screens/AccessControlPage';

export const metadata = buildMetadata('/access-control');

export default function Page() {
  return <AccessControlPage />;
}
