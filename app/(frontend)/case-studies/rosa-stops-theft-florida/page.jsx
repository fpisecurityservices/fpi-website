import { buildMetadata } from '@/lib/seo';
import RosaCaseStudy from '@/screens/casestudies/RosaCaseStudy';

export const metadata = buildMetadata('/case-studies/rosa-stops-theft-florida');

export default function Page() {
  return <RosaCaseStudy />;
}
