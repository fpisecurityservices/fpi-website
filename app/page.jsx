import { buildMetadata } from '@/lib/seo';
import HomePage from '@/screens/HomePage';

export const metadata = buildMetadata('/');

export default function Page() {
  return <HomePage />;
}
