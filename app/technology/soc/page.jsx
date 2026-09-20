import { buildMetadata } from '@/lib/seo';
import SocPage from '@/screens/SocPage';

export const metadata = buildMetadata('/technology/soc');

export default function Page() {
  return <SocPage />;
}
