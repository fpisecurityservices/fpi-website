import { buildMetadata } from '@/lib/seo';
import ContactPage from '@/screens/ContactPage';

export const metadata = buildMetadata('/contact');

export default function Page() {
  return <ContactPage />;
}
