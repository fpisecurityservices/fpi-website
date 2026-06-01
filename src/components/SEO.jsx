import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, ogTitle, ogDescription, ogUrl }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={ogUrl} />
    <meta property="og:title" content={ogTitle} />
    <meta property="og:description" content={ogDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={ogUrl} />
    <meta property="og:image" content="https://www.fpisecurity.com/assets/logo-transparent.png" />
  </Helmet>
);

export default SEO;
