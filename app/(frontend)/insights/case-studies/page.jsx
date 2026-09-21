import { buildMetadata } from '@/lib/seo';
import CaseStudiesHub from '@/screens/casestudies/CaseStudiesHub';

export const metadata = buildMetadata('/insights/case-studies');

export default function Page() {
  return <CaseStudiesHub />;
}
