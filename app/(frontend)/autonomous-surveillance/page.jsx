import { buildMetadata } from '@/lib/seo';
import AutonomousPage from '@/screens/AutonomousPage';

export const metadata = buildMetadata('/autonomous-surveillance');

export default function Page() {
  return <AutonomousPage />;
}
