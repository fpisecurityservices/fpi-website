import path from 'path';
import { fileURLToPath } from 'url';
import { buildConfig } from 'payload';
import { postgresAdapter } from '@payloadcms/db-postgres';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { s3Storage } from '@payloadcms/storage-s3';
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

const R2_ENABLED = Boolean(
  process.env.R2_ACCESS_KEY_ID &&
    process.env.R2_SECRET_ACCESS_KEY &&
    process.env.R2_BUCKET &&
    process.env.R2_ENDPOINT,
);
const R2_PUBLIC_BASE_URL = (process.env.R2_PUBLIC_BASE_URL || '').replace(/\/$/, '');

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
  // Cloudflare R2 (S3-compatible) media storage. Only loads once R2 credentials
  // exist; without them uploads use the local filesystem (fine for local dev).
  // Vercel's filesystem is ephemeral, so R2 is required before production.
  plugins: R2_ENABLED
    ? [
        s3Storage({
          collections: {
            media: R2_PUBLIC_BASE_URL
              ? {
                  // Serve images straight from R2's public URL (Cloudflare CDN,
                  // free egress) instead of proxying through the Next server.
                  disablePayloadAccessControl: true,
                  generateFileURL: ({ filename, prefix }) =>
                    prefix ? `${R2_PUBLIC_BASE_URL}/${prefix}/${filename}` : `${R2_PUBLIC_BASE_URL}/${filename}`,
                }
              : true,
          },
          bucket: process.env.R2_BUCKET,
          config: {
            endpoint: process.env.R2_ENDPOINT,
            region: 'auto',
            credentials: {
              accessKeyId: process.env.R2_ACCESS_KEY_ID,
              secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
            },
            forcePathStyle: true,
          },
        }),
      ]
    : [],
});
