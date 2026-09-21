import { buildMetadata } from '@/lib/seo';
import RemoteMonitoringPage from '@/screens/RemoteMonitoringPage';

export const metadata = buildMetadata('/remote-video-monitoring');

export default function Page() {
  return <RemoteMonitoringPage />;
}
