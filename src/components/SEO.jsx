// SEO is now handled by Next.js route `metadata` exports (see src/lib/seo.js).
// This no-op keeps the existing <SEO .../> calls in page bodies harmless
// during the migration; the props it receives are intentionally ignored.
const SEO = () => null;

export default SEO;
