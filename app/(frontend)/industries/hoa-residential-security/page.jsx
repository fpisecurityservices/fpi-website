import { buildMetadata } from '@/lib/seo';
import HoaResidentialPage from '@/screens/industries/HoaResidentialPage';

export const metadata = buildMetadata('/industries/hoa-residential-security');

export default function Page() {
  return <HoaResidentialPage />;
}
