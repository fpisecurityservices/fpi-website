import { buildMetadata } from '@/lib/seo';
import RetailPage from '@/screens/industries/RetailPage';

export const metadata = buildMetadata('/industries/retail-shopping-center-security');

export default function Page() {
  return <RetailPage />;
}
