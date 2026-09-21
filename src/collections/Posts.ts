import type { CollectionConfig } from 'payload';
import { authenticated, readPublished } from '../access';
import { seoField } from '../fields/seo';

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'publishedDate', '_status'],
    group: 'Content',
  },
  versions: {
    drafts: { autosave: { interval: 375 } },
    maxPerDoc: 25,
  },
  access: {
    read: readPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    { name: 'title', type: 'text', required: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: { position: 'sidebar', description: 'URL path under /insights or /blog.' },
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    { name: 'category', type: 'relationship', relationTo: 'categories' },
    { name: 'author', type: 'relationship', relationTo: 'users', admin: { position: 'sidebar' } },
    { name: 'publishedDate', type: 'date', admin: { position: 'sidebar' } },
    { name: 'content', type: 'richText' },
    seoField,
  ],
};
