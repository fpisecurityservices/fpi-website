import { buildMetadata } from '@/lib/seo';
import SurveillancePage from '@/screens/SurveillancePage';

export const metadata = buildMetadata('/surveillance-systems');

export default function Page() {
  return <SurveillancePage />;
}
