import { buildMetadata } from '@/lib/seo';
import ServicesPage from '@/screens/ServicesPage';

export const metadata = buildMetadata('/services');

export default function Page() {
  return <ServicesPage />;
}
