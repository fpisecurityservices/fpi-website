import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import sharp from 'sharp';

import { Users } from './collections/Users';
import { Media } from './collections/Media';
import { Categories } from './collections/Categories';
import { Posts } from './collections/Posts';
import { Pages } from './collections/Pages';
import { Header } from './globals/Header';
import { Footer } from './globals/Footer';
import { SiteSettings } from './globals/SiteSettings';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: { baseDir: path.resolve(dirname) },
    meta: {
      titleSuffix: '— FPI Security CMS',
    },
  },
  collections: [Pages, Posts, Media, Categories, Users],
  globals: [Header, Footer, SiteSettings],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: { outputFile: path.resolve(dirname, 'payload-types.ts') },
  db: postgresAdapter({
    pool: {
      connectionString:
        process.env.POSTGRES_URL || process.env.DATABASE_URL || process.env.POSTGRES_PRISMA_URL || '',
    },
  }),
  sharp,
  // Only load the Vercel Blob storage plugin once a token exists. Loading it
  // without one registers a client component that isn't in the importMap,
  // which Next throws on while rendering the admin. Until then, uploads use
  // the local filesystem (fine for local dev; we switch to Blob before deploy).
  plugins: process.env.BLOB_READ_WRITE_TOKEN
    ? [
        vercelBlobStorage({
          enabled: true,
          collections: { media: true },
          token: process.env.BLOB_READ_WRITE_TOKEN,
        }),
      ]
    : [],
});
