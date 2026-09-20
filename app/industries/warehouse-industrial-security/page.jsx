import { buildMetadata } from '@/lib/seo';
import WarehousePage from '@/screens/industries/WarehousePage';

export const metadata = buildMetadata('/industries/warehouse-industrial-security');

export default function Page() {
  return <WarehousePage />;
}
