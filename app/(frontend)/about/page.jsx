import { buildMetadata } from '@/lib/seo';
import AboutPage from '@/screens/AboutPage';

export const metadata = buildMetadata('/about');

export default function Page() {
  return <AboutPage />;
}
