import { buildMetadata } from '@/lib/seo';
import HospitalityPage from '@/screens/industries/HospitalityPage';

export const metadata = buildMetadata('/industries/hotel-security-services');

export default function Page() {
  return <HospitalityPage />;
}
