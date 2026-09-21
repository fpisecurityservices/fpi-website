import { buildMetadata } from '@/lib/seo';
import PlatformPage from '@/screens/PlatformPage';

export const metadata = buildMetadata('/technology/platform');

export default function Page() {
  return <PlatformPage />;
}
