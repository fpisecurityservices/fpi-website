import { buildMetadata } from '@/lib/seo';
import IndustriesPage from '@/screens/IndustriesPage';

export const metadata = buildMetadata('/industries');

export default function Page() {
  return <IndustriesPage />;
}
