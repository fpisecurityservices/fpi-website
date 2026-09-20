import { buildMetadata } from '@/lib/seo';
import Rio360CaseStudy from '@/screens/casestudies/Rio360CaseStudy';

export const metadata = buildMetadata('/case-studies/rio360-dealership-security-florida');

export default function Page() {
  return <Rio360CaseStudy />;
}
