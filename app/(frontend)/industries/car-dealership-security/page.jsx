import { buildMetadata } from '@/lib/seo';
import CarDealershipPage from '@/screens/industries/CarDealershipPage';

export const metadata = buildMetadata('/industries/car-dealership-security');

export default function Page() {
  return <CarDealershipPage />;
}
