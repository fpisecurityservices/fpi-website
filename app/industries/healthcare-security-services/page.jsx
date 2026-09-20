import { buildMetadata } from '@/lib/seo';
import HealthcarePage from '@/screens/industries/HealthcarePage';

export const metadata = buildMetadata('/industries/healthcare-security-services');

export default function Page() {
  return <HealthcarePage />;
}
