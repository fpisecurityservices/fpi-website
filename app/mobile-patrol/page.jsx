import { buildMetadata } from '@/lib/seo';
import PatrolPage from '@/screens/PatrolPage';

export const metadata = buildMetadata('/mobile-patrol');

export default function Page() {
  return <PatrolPage />;
}
